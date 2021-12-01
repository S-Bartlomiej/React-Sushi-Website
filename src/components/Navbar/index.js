import React from 'react'
import {Nav, NavLink} from './NavbarElements'

function Navbar({toggle}) {
    return (
        <>
            <Nav>
                <NavLink to='/'>Dragon sushi</NavLink>
               
            </Nav>
        </>
    );
}

export default Navbar
