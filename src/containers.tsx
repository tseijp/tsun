import React from 'react'
import styled from 'styled-components'
import {useAtom} from 'jotai'
import {Link} from './components'
import {timesAtom, entryAtom} from './atoms'

export function Container ({children}: any) {
    const [times] = useAtom(timesAtom)
    const [entry] = useAtom(entryAtom)
    return (
        <Wrap>
            <Header>
                {times.map((v, i) => <li key={v}><Link y={i}>{v}</Link></li>)}
            </Header>
            <Main>
                {children}
            </Main>
            <Footer>
                {entry.map((v, i) => <li key={v}><Link x={i}>{v}</Link></li>)}
            </Footer>
        </Wrap>
    )
}

export const Wrap = styled.main`
    width: 100%;
    height: 100%;
    background: #212121;
`

export const Main = styled.main`
    width: 100%;
    height: 100%;
    position: relative;
`

export const NavBar = styled.ul`
    /* position */
    z-index: 1;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(3px);
    box-shadow: 0px 4px 14px -7px rgba(0, 0, 0, 0.25);

    li {
        margin: auto;
        display: block;
        padding: 12px 16px;

        &:hover, &:focus {
            opacity: 0.7;
            outline:none;
        }
    }
`

export const Header = styled(NavBar)`
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    margin: 0;
`

export const Footer = styled(NavBar)`
    left: 0;
    bottom: 0;
    margin: 0;
    width: 100%;
    height: 50px;
`
