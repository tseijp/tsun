import React from 'react'
import styled from 'styled-components'
import {useAtom} from 'jotai'
import {pagesAtom, entryAtom} from '../src'
import {Link} from './components'

export function Container ({children}: any) {
    const [pages] = useAtom(pagesAtom)
    const [entry] = useAtom(entryAtom)
    return (
        <Wrap>
            <Header>
                {pages.map(v => <li><Link pages={`${v}`}>{v}</Link></li>)}
            </Header>
            {children}
            <Footer>
                {entry.map(v => <li><Link entry={`${v}`}>{v}</Link></li>)}
            </Footer>
        </Wrap>
    )
}
export const Wrap = styled.main`
    width: 100%;
    height: 100%;
`

export const Header = styled.ul`
    position: sticky;
    margin: 0;
    top: 0;
    left: 0;
    height: 32px;
    align-items: center;

    display: flex;
    list-stype-type: none;

    li {
        margin-left: auto;
    }
`

export const Footer = styled.ul`
    posision: sticky;
    margin: 0;
    bottom: 0;
    left: 0;
    height: 32px;
    display: flex;
    list-stype-type: none;

    li {
        margin-left: auto;
    }
`
