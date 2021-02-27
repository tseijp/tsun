import React from 'react';
import {Brick, Atom, Render} from 'react-mol'
import {animated as a} from 'react-spring/three'
import {useThree} from 'react-three-fiber'
import {useAtom} from 'jotai'
// import * as THREE from 'three'
import {
    useCamera,
    useChoice,
    useBlend,
    // useDetail,
    BookTexture,
    detailAtom,
    entryAtom,
    timesAtom
} from '../src'

export function App () {
    const [times] = useAtom(timesAtom)
    const [entry] = useAtom(entryAtom)
    const [detail] = useAtom(detailAtom)
    const camera = useCamera()
    const from = useChoice()
    // const to = useDetail()
    const blend = useBlend({weight: detail < 0? 0: 1, from, to: {}})
    const {viewport: {width: vw, height: vh}} = useThree()
    return (
        <Render>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]}/>
            <BookTexture />
            <group
                position-x={ vw * entry.length - vw}
                position-z={-vw * times.length + vw}
                position-y={-vh / 5}>
                <Brick items={times} position-z={vw}>
                    <Brick items={entry} position-x={-vw}>
                        <Brick items={[.1, .1, .1]} position-y={.1}>
                            {scale => <Atom scale-y={scale} rotation-y={Math.PI/2}/>}
                        </Brick>
                    </Brick>
                </Brick>
            </group>
            <a.perspectiveCamera ref={camera}
                position-x={blend.x.to(v => v * vw)}
                position-z={blend.y.to(v =>-v * vw + 4)}/>
        </Render>
    )
}
