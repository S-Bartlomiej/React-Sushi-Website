import React from 'react'
import {Nav, NavLink} from './NavbarElements'

function Navbar() {
    return (
        <>
            <Nav>
                <NavLink to='/'>Sushi</NavLink>
            </Nav>
        </>
    );
}

export default Navbar
