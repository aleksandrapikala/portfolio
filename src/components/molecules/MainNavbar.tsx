import React, { useEffect, useState } from "react"
import styled, { css } from "styled-components"
import Burger from "../atoms/Burger"
import Menu from "../atoms/Menu"

const NavbarWrapper = styled.nav(() => css`
    display: flex;
    flex-direction: row; /*domyślna*/
    align-items: center; /*domyślna stretch*/
    justify-content: space-between; /*domyślna ?*/
    scroll-margin-top: 60px;
    border-bottom: 2px solid black;
    margin: 0 3vw;
    background-color: #fff;
    padding-top: 1rem;
    z-index: 99;
`)

const MenuContainer = styled.ol(() => css`
    list-style-type:none;
    display: flex;
    gap: 3vw;
    margin: 0px 0px 1rem;
    li a{
        text-decoration: none;
        color: #000;
    }
`)

const NavBar = (): JSX.Element => {
    const [open, setOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 700;

    return <>
        <div style={{ position: 'fixed', width: '100%', zIndex: '99' }}>
            <NavbarWrapper>
                <h4 style={{ margin: '0 0 1rem 0' }}>JĘDRZEJ FIETT</h4>
                {isMobile ? <Burger open={open} setOpen={setOpen} />
                    :
                    <MenuContainer>
                        <li>
                            <a href="#diplomas">DIPLOMAS</a>
                        </li>
                        <li>
                            <a href="#portfolio">PORTFOLIO</a>
                        </li>
                        <li>
                            <a href='#about'>ABOUT</a>
                        </li>
                    </MenuContainer>
                }
            </NavbarWrapper>
        </div>

        {isMobile && <Menu open={open} setOpen={setOpen} />}
    </>
}

export default NavBar