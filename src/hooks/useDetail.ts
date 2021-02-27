import {useEffect} from 'react'
import {SpringValues, useSpring} from 'react-spring/three'
import {useAtom} from 'jotai'
import {posAtom} from '../atoms'

export type UseDetailState = {x: number, y: number, z: number}
export type UseDetailProps = {
    onChanged: (state: {x: 0, y: 0}) => void
}

export function useDetail(
    props?: Partial<UseDetailProps>
): SpringValues<UseDetailState>

export function useDetail ({onChanged: on}: any={}){
    // for spring
    // const [times] = useAtom(timesAtom)
    // const [entry] = useAtom(entryAtom)
    const [pos, ] = useAtom(posAtom)
    const [spring, set] = useSpring(() => ({x: 0, y: 0}))
    // const {size: {width: iw, height: ih}} = useThree()

    useEffect(() => void (set(pos)), [set, pos])
    return spring
}
