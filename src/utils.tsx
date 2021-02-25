import React from 'react'
import {useLoader} from 'react-three-fiber'
import * as THREE from 'three'

export function clamp (x:number, min=0, max=1) {
    return (x < min) ? min
         : (max < x) ? max
         : x
}

export function sign(x: number) {
    if (Math.sign) return Math.sign(x)
    return Number(x > 0) - Number(x < 0) || +x
}

export function abs(x: number) {
    if (Math.abs) return Math.abs(x)
    return x > 0? x: -x
}
export const BookTexture = ({url = "http://images-jp.amazon.com/images/P/4041315220.09.MZZZZZZZ"}: any) => {
    const texture = useLoader(THREE.TextureLoader, url)
    return (
        <>
            <meshPhongMaterial attachArray="material" color="white"/>
            <meshPhongMaterial attachArray="material" map={texture}/>
            <meshPhongMaterial attachArray="material" map={texture}/>
            <meshPhongMaterial attachArray="material" map={texture}/>
            <meshPhongMaterial attachArray="material" color="white"/>
            <meshPhongMaterial attachArray="material" color="white"/>
        </>
    )
}
