import React from 'react';
import ReactDOM from 'react-dom';
import {Brick, Atom, Render} from 'react-mol'
import {animated as a} from 'react-spring/three'
import {Canvas, useThree} from 'react-three-fiber'
import {Provider, useAtom} from 'jotai'
import {Html} from 'drei'

import './styles.css'
import {unregister} from './utils';
import {useCamera} from '../src'
import {entryAtom, pagesAtom} from '../src'

const Book = ({children, ...props}: any) => {
    const {viewport: {height:vh}} = useThree()
    return (
        <group {...props}>
            <Brick items={[1, 1]} position-y={2}>
                {scale => <Atom scale-y={scale}/>}
            </Brick>
            <Html position-y={-vh / 5} center>
                {children}
            </Html>
        </group>
    )
}

const App = () => {
    const [pages] = useAtom(pagesAtom)
    const [entry] = useAtom(entryAtom)
    const [{x, y}, camera] = useCamera()
    const {viewport: {width: vw}} = useThree()

    return (
        <Render>
            <boxBufferGeometry />
            <meshStandardMaterial />
            <Brick items={pages} position-z={-vw}>
                <Brick items={entry} position-x={vw}>
                    {(e) => <Book>{e}</Book>}
                </Brick>
            </Brick>
            <a.perspectiveCamera ref={camera}
                position-x={x.to(v => v * vw)}
                position-z={y.to(v =>-v * vw + 4)} />
        </Render>
    )
}

ReactDOM.render(
    <Canvas
        onCreated={({gl}: any) => gl.setClearColor("pink")}
        camera={{ position: [0, 3, 0] }}
        style={{position: "fixed", width: "100%", height: "100%"}}>
        <ambientLight intensity={.3} />
        <pointLight position={[ 100, 100, 100]} intensity={2.5} />
        <pointLight position={[-100,-100, 100]} intensity={5} />
        <Provider>
            <App />
        </Provider>
    </Canvas>,
    document.getElementById('root')
);
unregister();
