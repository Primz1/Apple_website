import { Html } from '@react-three/drei'
import React from 'react'
import titaniumApple from '/test.jpg'


const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <img
          src={titaniumApple}
          alt="Apple Logo"
          className="animate-spin mb-2"
          style={{ width: 64, height: 64, animationDuration: '1.5s', filter: 'drop-shadow(0 0 8px #aaa)' }}
        />
        <div className="text-lg font-semibold text-white drop-shadow">Loading...</div>
      </div>
    </Html>
  )
}

export default Loader