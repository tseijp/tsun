import * as THREE from 'three';
import ReactDOM from 'react-dom'
import React, { useRef, useEffect} from 'react'
import { useFrame, useThree } from 'react-three-fiber/css3d'
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer'
import {useBook} from '../hooks'

const BookCover = ({ group=null, position=[0,0,0], rotation=[0,0,0]}) => {
    const { scene } = useThree()
    const obj = useRef(null)
    const [book] = useBook('url?')
    useEffect(() => {
        if(!book.current) return
        obj.current = new CSS3DObject(book.current);
        (group||scene).add(obj.current)
        return () => (group||scene).remove(obj.current)
    }, [scene, group])
    useFrame(() => {
        obj.current.rotation.set(...rotation)
        obj.current.position.set(...position)
    })
    return null
}

export { BookCover }
