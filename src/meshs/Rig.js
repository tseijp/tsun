import * as THREE from 'three'
import React, { useRef } from 'react'
import { useThree, useFrame } from 'react-three-fiber'
export function Rig ({y, position=[0,0,0], radius=[10,10],  lookAt, distance=1, children}) {
    const group = useRef()
    const {camera} = useThree()
    useFrame(()=>{
        const th = (1 + y.getValue()) * Math.PI / 2
        const cy = Math.cos(th)*radius[0] + position[1]
        const cz = Math.sin(th)*radius[1] + position[2]
        camera.position.set(0, cy, cz)
        camera.lookAt(new THREE.Vector3(...(lookAt||position)))
        //camera.matrix.lookAt(camera.position, lookAt, normal)
        //camera.updateProjectionMatrix()
        //group.current.position.copy()
    })
    return (
        <group ref={group}>
            {children}
        </group>
    )
}
