import * as CANNON from 'cannon'
import React, { useEffect, useState } from 'react'
import { Canvas } from 'react-three-fiber'
//import { useCannon } from '../hooks'
import { usePlane } from 'use-cannon'
export function Plane({ position, size=[100, 100], ...props }: any) {
    // Register plane as a physics body with zero mass
    const [ref] = usePlane(()=>({position, ...props}))
    return (
        <mesh ref={ref} receiveShadow>
            <planeBufferGeometry attach="geometry" args={size} />
            <meshStandardMaterial attach="material" color="#171717" />
        </mesh>
    )
}
