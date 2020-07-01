import * as THREE from 'three'
import * as CANNON from 'cannon'
import ReactDOM from 'react-dom'
import React, { Fragment, Suspense, useEffect, useState, useMemo, useRef } from 'react'
import { Canvas, useThree } from 'react-three-fiber'
import { useDrag } from "react-use-gesture";
import './styles.css'
import { Box, Plane, Rig, useYScroll } from '../src'
import { Physics } from 'use-cannon'

function App() {
    //const bookHover = useRef({})
    //const bookClick = useRef({})
    const books = useMemo(()=>{
        //TODO:rest api here
        const urls = ['react', 'deeplearning', 'typescript', 'threejs']
        return [...Array(9)].map((_,i)=>({
            title:urls[i%3],
            url:`/${urls[i%3]}.jpg`,
            position:[(Math.random()-.5)*6, (Math.random()-.5)*4, i*2+1]
        }))
    }, [])
    const [y] = useYScroll({ speed:0.1, domTarget:window })
    return (
        <Fragment>
            <Canvas shadowMap
            onCreated={({ gl }) => {
                gl.toneMapping = THREE.ACESFilmicToneMapping
                gl.outputEncoding = THREE.sRGBEncoding
            }}>
                <pointLight position={[-1, -1, 3]} intensity={0.25} />
                <spotLight intensity={0.3} position={[30, 30, 50]} angle={0.2} penumbra={1} castShadow />
                <Physics iterations={10} tolerance={0.0001} gravity={[0,0,-25]} >
                    <Plane position={[0,0,0]} size={[100,100]} mass={0}/>
                    <Rig position={[0,0,1]} lookAt={[0,0,0]} radius={[20,20]} y={y}>
                        <Suspense fallback={null}>
                        {books.map( (book, key) =>
                            <Box {...{key, ...book, /*bookClick, bookHover*/}}
                                scale={[6, 8.5, .8]} mass={1}/>
                        )}
                        </Suspense>
                    </Rig>
                </Physics>
                {[...Array(4)].map((_,i)=>[i%2-0.5,(i+1)%2-0.5,0]).map((v,i)=>
                    <axesHelper key={i} position={[v[0]*10,v[1]*10,v[2]]} scale={[5,5,5]}/>
                )}
            </Canvas>
        </Fragment>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))
