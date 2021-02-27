import {useEffect} from 'react'
import {useThree} from 'react-three-fiber'
import {SpringValue, useSpring} from 'react-spring/three'
import {useDrag} from 'react-use-gesture'
import {useAtom} from 'jotai'
import {timesAtom, entryAtom, posAtom} from '../atoms'
import {clamp, sign, abs} from '../utils'

type CameraProps = {
    onChanged: ((args: {x: number, y: number}) => void)
}
export function useChoice (
    props?: Partial<CameraProps>,
): { x: SpringValue<number>; y: SpringValue<number>; }

export function useChoice ({onChanged: on}: any={}){
    // for spring
    const [times] = useAtom(timesAtom)
    const [entry] = useAtom(entryAtom)
    const [pos, setPos] = useAtom(posAtom)
    const [spring, set] = useSpring(() => ({x: 0, y: 0}))
    const {size: {width: iw, height: ih}} = useThree()

    useEffect(() => void (set(pos)), [set, pos])
    useEffect(() => {
        const pathname = window.location.pathname.split('/')
        const x = entry.indexOf(pathname[2])
        const y = times.indexOf(pathname[1])
        setPos({x, y})
    }, [times, entry, setPos])

    // for gesture
    useDrag(({ active, cancel, movement: [mx, my], vxvy: [vx, vy]}) => {
        const [lx, ly] = [entry.length - 1, times.length - 1]
        const sx = active && abs(vx) > .5 && abs(mx) > 50? sign(-vx): 0
        const sy = active && abs(vy) > .5 && abs(my) > 50? sign(vy): 0
        const x = sy? pos.x: sx? clamp(pos.x + sx, 0, lx): pos.x - (active? mx / iw: 0)
        const y = sx? pos.y: sy? clamp(pos.y + sy, 0, ly): pos.y + (active? my / ih: 0)
        sx ^ sy? void (setPos({x, y}), on && on(x, y), cancel()): set({x, y})
    }, {domTarget: window})

    return spring
}
