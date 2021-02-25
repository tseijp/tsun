import {MutableRefObject, useImperativeHandle, useEffect, useRef} from 'react'
import {useThree, useFrame} from 'react-three-fiber'
import {SpringValue, useSpring} from 'react-spring/three'
import {useDrag} from 'react-use-gesture'
import {useAtom} from 'jotai'
import {pagesAtom, entryAtom, rowAtom, colAtom} from '../atoms'
import {clamp, sign, abs} from '../utils'
import {Camera} from 'three'

type CameraProps = {
    onChanged: ((x: number, y: number) => void)
}
export function useCamera (
    props?: Partial<CameraProps>,
    forwardRef?: MutableRefObject<any>
): [
    { x: SpringValue<number>; y: SpringValue<number>; },
    MutableRefObject<Camera | undefined>
]

export function useCamera ({onChanged: on}: any={}, forwardRef?: any){
    // for spring
    const [pages] = useAtom(pagesAtom)
    const [entry] = useAtom(entryAtom)
    const [col, setCol] = useAtom(colAtom)
    const [row, setRow] = useAtom(rowAtom)
    const [spring, set] = useSpring(() => ({x: 0, y: 0}))
    const {size: {width: iw, height: ih}} = useThree()

    // for camera
    const {setDefaultCamera} = useThree()
    const camera = useRef<THREE.Camera>()
    const handle = ({x=0, y=0}) => void (setCol(x), setRow(y), set({x, y}), on && on(x, y))
    useFrame(() => camera.current?.updateMatrixWorld())
    useEffect(() => void setDefaultCamera(camera.current as any), [setDefaultCamera])
    useEffect(() => void set({x: col, y: row}), [set, col, row])
    useImperativeHandle(forwardRef, () => ({handle, ...camera.current}))

    // for gesture
    useDrag(({ active, cancel, movement: [mx, my], vxvy: [vx, vy]}) => {
        const [lx, ly] = [entry.length - 1, pages.length - 1]
        const sx = active && abs(vx) > .5 && abs(mx) > 50? sign(-vx): 0
        const sy = active && abs(vy) > .5 && abs(my) > 50? sign(vy): 0
        const x = sy? col: sx? clamp(col + sx, 0, lx): col - (active? mx / iw: 0)
        const y = sx? row: sy? clamp(row + sy, 0, ly): row + (active? my / ih: 0)
        sx ^ sy? void (handle({x, y}), cancel()): set({x, y})
    }, {domTarget: window})

    return [spring, camera]
}
