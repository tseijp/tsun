import React from 'react'
import {interpolate, SpringValues} from 'react-spring'

export type UseBlendProps = {
    weight?: number
}

export function useBlend <From extends object={}, To extends object={}>(props?:
    UseBlendProps & {
        from: SpringValues<From>,
        to: SpringValues<To>,
    }
): SpringValues<From & To>


export function useBlend (props: any) {
    const [from] = React.useState(() => props.from)
    React.useMemo(() => {
        const average = (from=0, to=0) => from * (1 - props.weight) + to * props.weight
        Object.entries(props.to).forEach(([key, value]) => {
            if (from[key])
                from[key] = interpolate([from[key], value], average as any)
            else
                from[key] = value
        })
    }, [from, props.weight, props.to])
    return from
}
