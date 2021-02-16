import {MutableRefObject, useEffect, useRef} from 'react'
import {useThree, useFrame} from 'react-three-fiber'
import {SpringValue, useSpring} from 'react-spring/three'
import {useDrag} from 'react-use-gesture'
import {useAtom} from 'jotai'
import {pagesAtom, entryAtom, rowAtom, colAtom} from '../atoms'
import {clamp, sign, abs} from '../utils'
import {Camera} from 'three'

export function useCamera (): [
    { x: SpringValue<number>; y: SpringValue<number>; },
    MutableRefObject<Camera | undefined>
] {
    // for spring
    const [pages] = useAtom(pagesAtom)
    const [entry] = useAtom(entryAtom)
    const [row, setRow] = useAtom(rowAtom)
    const [col, setCol] = useAtom(colAtom)
    const [spring, setSpring] = useSpring(() => ({x: 0, y: 0}))
    const {size: {width: iw, height: ih}} = useThree()

    // for ref
    const ref = useRef<THREE.Camera>()
    const {setDefaultCamera: set} = useThree()
    useEffect(() => void set(ref.current as any), [set])
    useFrame(() => ref.current?.updateMatrixWorld())
    useDrag(({ active, cancel, movement: [mx, my], vxvy: [vx, vy]}) => {
        const swipeX = active && abs(vx) > .5 && abs(mx) > 50 ? sign(-vx): 0
        const swipeY = active && abs(vy) > .5 && abs(my) > 50 ? sign(vy): 0
        const x = swipeY? col: swipeX
            ? clamp(col + swipeX, 0, entry.length - 1)
            : col + (active? -mx / iw: 0)
        const y = swipeX? row: swipeY
            ? clamp(row + swipeY, 0, pages.length - 1)
            : row + (active? my / ih: 0)
        return (!swipeX && !swipeY)
            ? void (setSpring({x, y}))
            : void (setCol(x), setRow(y), cancel())
    }, {domTarget: window})

    return [spring, ref]
}
