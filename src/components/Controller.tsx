import ReactDOM from 'react-dom'
import React, {forwardRef, useEffect, useMemo, useState, } from 'react'
import { useDrag } from 'react-use-gesture'
import { useThree } from 'react-three-fiber/css3d'
const Controller = forwardRef(
    ({
        // size=100, limit=100, portal=null,
        onDrag=null,
        // ...props
    }: any) => {
    const {gl} = useThree() //target
    const [el] = useState(()=>document.createElement('div'))
    const bind = useDrag(() => {//({ down, movement: [mx, my] }) => {
        // const x = (down? mx:0) / limit
        // const y = (down? my:0) / limit
        // ref.current = {x, y} as any
        if (onDrag)
            onDrag()
    })
    const child = useMemo(() => {
        const style = {position:"fixed", zIndex:1, width:"100%", height:"100%",top:0,left:0} as any
        return <div style={style} {...bind()} />
    },[])
    useEffect(()=>{
        // ref.current = {x:0, y:0}
        const target = gl.domElement.parentNode
        if (target)
            target.prepend(el)//.appendChild(el)
        void ReactDOM.render(child, el)
        return ()=>{ReactDOM.unmountComponentAtNode(el)}
    }, [el])
    return null//<group {...props} />
})

export { Controller };
