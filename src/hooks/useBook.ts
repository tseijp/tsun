import React, {useRef, useEffect, useState} from 'react'
import ReactDOM from 'react-dom';

const useBook = () => {
    const [el] = useState(() => document.createElement('div'))
    const ref = useRef(null)
    useEffect(()=>{
        const href = `//www.amazon.co.jp/dp/4873118379/ref=as_li_ss_il?coliid=I3UNVOGTH0P9K2&colid=14VEET4NC7DT8&psc=1&ref_=lv_ov_lig_dp_it&linkCode=li2&tag=&linkId=7ff67c844d6a513f5bc60c584c4dabec&language=ja_JP`
        const src1 = `//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4873118379&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=&language=ja_JP`
        const src2 = `//ir-jp.amazon-adsystem.com/e/ir?t=&language=ja_JP&l=li2&o=9&a=4873118379`
        ReactDOM.render(
            <div ref={ref}>
                <a href={href} target="_blank"><img border="0" src={src1} /></a>
                <img src={src2} width="1" height="1" border="0"   />
            </div>
        , el)
    }, [el])
    return [ref]
}

export { useBook }
