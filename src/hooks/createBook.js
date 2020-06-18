import React, {Fragment, useMemo} from 'react'
import ReactDOM from 'react-dom'

const createBook = (ref, root) => {
    return ReactDOM.createPortal(
        <Fragment>
            <div ref={ref} style={{boxSizing:"border-box"}}>Hello!</div>
        </Fragment>
    , root)
}
export default createBook
