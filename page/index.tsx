import React from 'react';
import ReactDOM from 'react-dom';
import {Brick, Atom, Render} from 'react-mol'
import {animated as a} from 'react-spring/three'
import {Canvas, useThree, useLoader} from 'react-three-fiber'
import {Provider, useAtom} from 'jotai'
import * as THREE from 'three'
import './styles.css'
import {unregister} from './utils';
import {useCamera} from '../src'
import {entryAtom, pagesAtom} from '../src'

const bookURL = "http://images-jp.amazon.com/images/P/4041315220.09.MZZZZZZZ"

const BookTexture = () => {
    const texture = useLoader(THREE.TextureLoader, bookURL)
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
const App = () => {
    const [pages] = useAtom(pagesAtom)
    const [entry] = useAtom(entryAtom)
    const [{x, y}, camera] = useCamera()
    const {viewport: {width: vw}} = useThree()
    return (
        <Render>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]}/>
            <BookTexture />
            <group position-x={vw * entry.length - vw}>
                <Brick items={pages} position-z={-vw}>
                    <Brick items={entry} position-x={-vw}>
                        <Brick items={[.1, .1, .1]} position-y={.1}>
                            {scale => <Atom scale-y={scale} rotation-y={Math.PI/2}/>}
                        </Brick>
                    </Brick>
                </Brick>
            </group>
            <a.perspectiveCamera ref={camera}
                position-x={x.to(v => v * vw)}
                position-z={y.to(v =>-v * vw + 4)} />
        </Render>
    )
}

ReactDOM.render(
    <Canvas
        onCreated={({gl}: any) => gl.setClearColor("pink")}>
        <ambientLight intensity={.3} />
        <pointLight position={[ 100, 100, 100]} intensity={2.5} />
        <pointLight position={[-100,-100, 100]} intensity={5} />
        <Provider>
            <React.Suspense fallback={null}>
                <App />
            </React.Suspense>
        </Provider>
    </Canvas>,
    document.getElementById('root')
);
unregister();
