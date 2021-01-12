import * as THREE from 'three'
import * as CANNON from 'cannon'
import React, { useEffect, useState, useMemo } from 'react'
import { useHTML } from '../hooks'
import { useBox } from 'use-cannon'
//import {useFrame} from 'react-three-fiber'

export function Box ({
    position=[0,0,0],
    title='None',
    scale=[1,1,1],
    rotation=[0,0,0],
    url='/threejs.jpg',
    ...props
}) {
    const texture = useMemo(() => new THREE.TextureLoader().load(url), [url])
    const [ref, api] = useBox(()=>({position, args:scale, isKinematic:true, ...props}))
    useHTML(()=>{
        return (
            <div style={{color:"white",fontSize:"2em"}}>HI</div>
        )
    })
    return (
        <mesh ref={ref} castShadow receiveShadow
            onPointerOver={e=> {
                e.stopPropagation()
                //if (bookHover.current.title!==title)
                //    bookHover.current.title  =title
            }}
            onClick={e=>{
                e.stopPropagation()
                api.position.set(0,0,25)
            }}>
            <boxGeometry attach="geometry" args={scale as any} />
            <meshLambertMaterial attach="material" transparent>
                <primitive attach="map" object={texture} />
            </meshLambertMaterial>
        </mesh>
    )
}
