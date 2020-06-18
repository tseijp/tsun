import React, { useRef, Fragment, useMemo, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Canvas, useFrame, useThree, useResource } from 'react-three-fiber/css3d'
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer'
import './styles.css'
import { Book, createBook} from '../src'

const Box = React.forwardRef((props,ref) => {
    return (
        <mesh {...props} ref={ref}>
            <boxBufferGeometry    attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" />
        </mesh>
    )
})

const World = () => {
    const [ref,target] = useResource(null)
    const group = useRef()
    return (
        <Fragment>
            <Canvas camera={{ position: [0, 0, 15] }}>
                <mesh ref={ref}>
                    <boxBufferGeometry    attach="geometry" args={[1, 1, 1]} />
                    <meshStandardMaterial attach="material" />
                </mesh>
                <group ref={group}/>
                <Book position={[0,0,-100]} rotation={[0,0,0]} scale={[0.1,0.1,0.1]}/>
            </Canvas>
        </Fragment>
    )
}

ReactDOM.render(<World />, document.getElementById('root'))
