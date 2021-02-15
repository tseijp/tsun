import ReactDOM from 'react-dom'
import {useEffect, useState} from 'react'

export function useHTML (getChild: any, id='root') {
    const [el] = useState(()=>document.createElement('div'))
    useEffect(() => {
        const target = document.getElementById(id)
        if (!target)
            return
        el.style.cssText = 'position:fixed;top:0;left:0;'
        target.prepend(el)//.appendChild(el)
        void ReactDOM.render(getChild(), el)
        return () => void ReactDOM.unmountComponentAtNode(el)
    }, [el, getChild, id])
    return null
}
