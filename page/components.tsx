import React, {useCallback, MouseEvent} from 'react'
import {useAtom} from 'jotai'
import {pathAtom} from '../src'

export function Link ({pages="", entry="", children}: any) {
    const [, setHistory] = useAtom(pathAtom)
    const onClick = useCallback((e: MouseEvent) => {
        setHistory(`/${pages || "Reading"}/${entry}`)
        e.stopPropagation()
    }, [pages, entry, setHistory])
    return <div children={children} onClick={onClick}/>
}
