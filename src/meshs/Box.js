import * as CANNON from 'cannon'
import React, { useEffect, useState } from 'react'
//import { useCannon } from '../hooks'
import { useBox } from 'use-cannon'

export function Box({ position, scale=[1, 1, 1], ...props }) {
  // Register box as a physics body with mass
    /*const ref = useCannon(body => {
        body.addShape(new CANNON.Box(new CANNON.Vec3(scale)))
        body.updateMassProperties();
        body.position.set(...position)
    }, { mass })*/
    const [ref] = useBox(()=>({position, scale, ...props}))
    return (
        <mesh ref={ref} castShadow receiveShadow>
            <boxGeometry attach="geometry" args={scale} />
            <meshStandardMaterial attach="material" roughness={0.5} color="#575757" />
        </mesh>
    )
}
