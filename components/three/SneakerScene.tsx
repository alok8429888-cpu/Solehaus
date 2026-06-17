'use client'

import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls, Stage, useGLTF, Html } from '@react-three/drei'
import type { Group } from 'three'

const MODEL_URL =
  'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/MaterialsVariantsShoe/glTF-Binary/MaterialsVariantsShoe.glb'

const cameraProps = { position: [0, 0, 6] as [number, number, number], fov: 40 }
const glProps = { antialias: true, alpha: true }
const stageShadows = { type: 'contact' as const, opacity: 0.4, blur: 2.5 }
// Allow vertical page scrolling even when the swipe starts on the canvas (mobile).
const canvasStyle = { touchAction: 'pan-y' as const }

function Shoe({ spin }: { spin: boolean }) {
  const ref = useRef<Group>(null)
  const { scene } = useGLTF(MODEL_URL)
  useFrame((_, delta) => {
    if (spin && ref.current) ref.current.rotation.y += delta * 0.5
  })
  return (
    <group ref={ref}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload(MODEL_URL)

function SceneLoader() {
  return (
    <Html center>
      <div className='flex flex-col items-center gap-3 text-muted'>
        <div className='h-8 w-8 animate-spin rounded-full border-2 border-line border-t-volt' />
        <span className='text-[10px] uppercase tracking-widest'>Loading 3D</span>
      </div>
    </Html>
  )
}

export default function SneakerScene() {
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches)
  }, [])

  const dpr: [number, number] = isTouch ? [1, 1.5] : [1, 2]

  return (
    <Canvas camera={cameraProps} dpr={dpr} gl={glProps} style={canvasStyle}>
      <Suspense fallback={<SceneLoader />}>
        <Stage environment='city' intensity={0.5} shadows={stageShadows} adjustCamera={1.2}>
          <Shoe spin={isTouch} />
        </Stage>
        <Environment preset='city' />
      </Suspense>
      {isTouch ? null : (
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1.4}
          minPolarAngle={Math.PI / 2.6}
          maxPolarAngle={Math.PI / 1.9}
        />
      )}
    </Canvas>
  )
}
