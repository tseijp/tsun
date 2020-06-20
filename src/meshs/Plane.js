import * as CANNON from 'cannon'
import React, { useEffect, useState } from 'react'
import { Canvas } from 'react-three-fiber'
//import { useCannon } from '../hooks'
import { usePlane } from 'use-cannon'
export function Plane({ position, ...props }) {
    // Register plane as a physics body with zero mass
    /*
    const ref = useCannon( body => {
        body.addShape(new CANNON.Plane())
        body.position.set(...position)
    }, { mass: 0 })
    */
    const [ref] = usePlane(()=>({position, ...props}))
    return (
        <mesh ref={ref} receiveShadow>
            <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
            <meshStandardMaterial attach="material" color="#171717" />
        </mesh>
    )
}
