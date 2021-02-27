import React from 'react'
import {interpolate, SpringValues} from 'react-spring'

export type UseBlendProps = {
    weight: number
}

export function useBlend <From extends object={}, To extends object={}>(props?:
    UseBlendProps & {
        from: SpringValues<From>,
        to: SpringValues<To>,
    }
): SpringValues<From & To>


export function useBlend (props: any) {
    const [values] = React.useState(() => props.from)
    React.useMemo(() => {
        const average = (from=0, to=0) => from * props.weight + to * (1 - props.weight)
        Object.entries(props.to).forEach(([key, value]) => {
            if (values[key])
                values[key] = interpolate([values[key], value], average as any)
            else
                values[key] = value
        })
    }, [values, props.weight, props.to])
    return values
}
