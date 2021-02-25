import React from 'react';
import {Brick, Atom, Render} from 'react-mol'
import {animated as a} from 'react-spring/three'
import {useThree} from 'react-three-fiber'
import {useAtom} from 'jotai'
// import * as THREE from 'three'
import {useCamera, BookTexture} from '../src'
import {entryAtom, pagesAtom} from '../src'

export function App () {
    const [pages] = useAtom(pagesAtom)
    const [entry] = useAtom(entryAtom)
    const [{x, y}, camera] = useCamera()
    const {viewport: {width: vw}} = useThree()
    return (
        <Render>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]}/>
            <BookTexture />
            <group position-x={vw * entry.length - vw} position-y={-1}>
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
                position-z={y.to(v =>-v * vw + 4)}/>
        </Render>
    )
}
