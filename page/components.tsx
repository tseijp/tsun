import React, {useCallback, MouseEvent} from 'react'
import {useAtom} from 'jotai'
import {pathAtom} from '../src'

export function Link ({row=-1, col=-1, children}: any) {
    const [, setPath] = useAtom(pathAtom)
    const onClick = useCallback((e: MouseEvent) => {
        setPath({col, row})
        e.stopPropagation()
    }, [row, col, setPath])
    return <div children={children} onClick={onClick}/>
}
