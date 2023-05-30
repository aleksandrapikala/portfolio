import React from 'react';
import styled from 'styled-components';
import xmark from "../../assets/icons/x-mark.svg";

type StyledMenuProps = {
    open?: boolean;
}

const StyledMenu = styled.div<StyledMenuProps>`
    position: fixed;
    background-color: #fff;
    height: 100%;
    width: ${({ open }) => (open ? '17%' : '0')};
    min-width: ${({ open }) => (open ? '150px' : '0')};
    z-index: 99;
    display: flex;
    overflow: hidden;
    right: 0;
    transition: all 0.5s;
    img {
        width: ${({ open }) => (open ? '1.5rem' : '0')};;
        position: absolute;
        top: 1rem;
        right: 3rem;
        cursor: pointer;
    }
    ol {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-top: 60px;
        list-style-type:none;
        padding-left: 25px;
        gap: 0.4rem;
        li a{
            text-decoration: none;
            color: #000;
        }
    }

`

const Menu = ({ open, setOpen }) => {
    return (
        <StyledMenu open={open}>
            <img src={xmark} onClick={() => setOpen(!open)} />
            <ol>
                <li>
                    <a href="#diplomas">DIPLOMAS</a>
                </li>
                <li>
                    <a href="#portfolio">PORTFOLIO</a>
                </li>
                <li>
                    <a href='#about'>ABOUT</a>
                </li>
            </ol>
        </StyledMenu>
    )
}

export default Menu