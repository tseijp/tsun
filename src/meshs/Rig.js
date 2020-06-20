import * as THREE from 'three'
import React, { useRef } from 'react'
import { useThree, useFrame } from 'react-three-fiber'
export function Rig ({y, position, children}) {
    const group = useRef()
    const rig = useRef()
    const {camera} = useThree()
    useFrame(()=>{
        const th = (1 + y.getValue()) * Math.PI / 2
        const cy = Math.cos(th) * 15 + position[1]
        const cz = Math.sin(th) * 15 + position[2]
        camera.position.set(0, cy, cz)
        camera.lookAt(new THREE.Vector3(...position))
        //camera.position.copy(pos)
        //const lookAt = [0,0,0]
        //camera.matrix.lookAt(camera.position, lookAt, normal)
        //camera.updateProjectionMatrix()
        //group.current.position.copy()
    })
    return (
        <group ref={group}>
            <group ref={rig}>
                {children}
            </group>
        </group>
    )
}
