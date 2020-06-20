import * as THREE from 'three'
import * as CANNON from 'cannon'
import ReactDOM from 'react-dom'
import React, { useEffect, useState } from 'react'
import { Canvas, useThree } from 'react-three-fiber'
import { useDrag } from "react-use-gesture";
import './styles.css'
import { Box, Plane, Rig, useYScroll } from '../src'
import { Physics } from 'use-cannon'

function App() {
    const [positions, set] = useState([[1, 0, 1],[1, 1, 5],[0, 0, 6],[-1, 1, 8],[-1, 1, 10],[1, -1, 10]])
    const [y] = useYScroll({ speed:0.1, domTarget: window })
    return (
        <div className="main" onDoubleClick={()=>set(pre=>pre)}>
            <Canvas shadowMap
            onCreated={({ gl }) => {
                gl.toneMapping = THREE.ACESFilmicToneMapping
                gl.outputEncoding = THREE.sRGBEncoding
            }}>
                <pointLight position={[-10, -10, 30]} intensity={0.25} />
                <spotLight intensity={0.3} position={[30, 30, 50]} angle={0.2} penumbra={1} castShadow />
                <Physics iterations={10} tolerance={0.0001} gravity={[0,0,-25]} >
                    <Plane position={[0, 0, -10]} mass={0}/>
                    <Rig position={[0,0,-10]} y={y}>
                        {positions.map( (position,key) =>
                            <Box {...{key, position}} scale={[6, 9, 1]} mass={10000}/>
                        )}
                    </Rig>
                </Physics>
                <axesHelper scale={[1,1,1]}/>
            </Canvas>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))
