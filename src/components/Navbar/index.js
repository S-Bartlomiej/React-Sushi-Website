import React from 'react'
import {Nav, NavLink, NavIcon, Bars} from './NavbarElements'
import  LogozSushi  from '../../Images/logo-sushi.png';

function Navbar() {
    return (
        <>
            <Nav>
                <NavLink to='/'>Sushi</NavLink>
                
                <NavIcon>
                    <p>Menu</p>
                    <img src={LogozSushi} alt=""/>
                </NavIcon>

            </Nav>
        </>
    );
}

export default Navbar
