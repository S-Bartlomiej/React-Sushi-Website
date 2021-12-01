import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';


export const Nav = styled.nav`
    background: red;
    min-height: 100px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`;

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media(max-width: 320x) 
    {
        position: absolute;
        top: 10px;
        left: 25px;
    }

`;



