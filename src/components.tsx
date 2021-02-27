import React, {useCallback, MouseEvent} from 'react'
import {useAtom} from 'jotai'
import {posAtom} from './atoms'
import {SpringValues} from 'react-spring'
import {useBlend, UseBlendProps} from './hooks'

export function Blend <From extends object={}, To extends object={}>(
    props: UseBlendProps & {
        children: (spring: SpringValues<From & To>) => null | JSX.Element
    }
): null | JSX.Element

export function Blend <From extends object={}, To extends object={}>({
    children, ...props
}: any) {
    return children(useBlend<From, To>(props))
}

export function Link (props: {x?: number, y?: number, children: string}): null | JSX.Element

export function Link ({x=-1, y=-1, children}: any) {
    const [, setPos] = useAtom(posAtom)
    const onClick = useCallback((e: MouseEvent) => {
        setPos({x, y})
        e.stopPropagation()
    }, [x, y, setPos])
    return <div children={children} onClick={onClick}/>
}
