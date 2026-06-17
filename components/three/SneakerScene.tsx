'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Stage, useGLTF, Html } from '@react-three/drei'

const MODEL_URL =
  'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/MaterialsVariantsShoe/glTF-Binary/MaterialsVariantsShoe.glb'

function Shoe() {
  const { scene } = useGLTF(MODEL_URL)
  return <primitive object={scene} />
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
  return (
    <Canvas
      camera= position: [0, 0, 6], fov: 40 
      dpr={[1, 2]}
      gl= antialias: true, alpha: true 
    >
      <Suspense fallback={<SceneLoader />}>
        <Stage
          environment='city'
          intensity={0.5}
          shadows= type: 'contact', opacity: 0.4, blur: 2.5 
          adjustCamera={1.2}
        >
          <Shoe />
        </Stage>
        <Environment preset='city' />
      </Suspense>
      <OrbitControls
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.4}
        minPolarAngle={Math.PI / 2.6}
        maxPolarAngle={Math.PI / 1.9}
      />
    </Canvas>
  )
}
