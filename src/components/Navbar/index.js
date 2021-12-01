import React from 'react'
import {Nav, NavLink, NavIcon} from './NavbarElements'

function Navbar({toggle}) {
    return (
        <>
            <Nav>
                <NavLink to='/'>Dragon sushi</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    
                </NavIcon>
            </Nav>
        </>
    );
}

export default Navbar
