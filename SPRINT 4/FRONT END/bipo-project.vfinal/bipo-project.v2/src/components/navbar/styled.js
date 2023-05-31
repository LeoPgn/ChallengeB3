import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';


export const Nav = styled.div`
    background: #2980b9;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`
export const NavLink = styled(Link)`
    color:#fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        color: #15cdfc;
    }
`
export const Bars = styled(FaBars)`
    display: none;
    color: #f1c40f;
    

    @media screen and (max-width: 1082px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 1082px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    background: #2980b9;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    height: 90vh;
    transition: all 0.3s ease-in-out;
    padding-bottom: 130px;
    }
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    
@media screen and (max-width : 1082px){
    display: none;
    }
`
export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #FFFF00 ;
    padding: 10px 22px;
    color: #000000;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #000000;
        color: #FFFF00;
    }
 `