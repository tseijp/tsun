import React, {useCallback, MouseEvent} from 'react'
import {useAtom} from 'jotai'
import {posAtom} from '../src'

export function Link ({x=-1, y=-1, children}: any) {
    const [, setPos] = useAtom(posAtom)
    const onClick = useCallback((e: MouseEvent) => {
        setPos({x, y})
        e.stopPropagation()
    }, [x, y, setPos])
    return <div children={children} onClick={onClick}/>
}
