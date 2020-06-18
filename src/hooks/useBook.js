import React, {useRef, useMemo, useEffect, Fragment} from 'react'
import ReactDOM from 'react-dom';

const useBook = ({link}) => {
    const book = useRef()
    const root = useMemo(() => document.createElement('div'), [])
    useEffect(()=>{
        ReactDOM.render( <div ref={book}>{link}</div> , root)
    }, [link])
    return [book]
}
export default useBook
