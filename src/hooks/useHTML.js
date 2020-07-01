import ReactDOM from 'react-dom'
import React, {useEffect, useState} from 'react'

export function useHTML (getChild, id='root') {
    const [el] = useState(()=>document.createElement('div'))
    useEffect(()=>{
        const target = document.getElementById(id)
        if (!target)
            return
        el.style.cssText = 'position:fixed;top:0;left:0;'
        target.prepend(el)//.appendChild(el)
        void ReactDOM.render(getChild(), el)
        return ()=>ReactDOM.unmountComponentAtNode(el)
    }, [el])
    return null
}
