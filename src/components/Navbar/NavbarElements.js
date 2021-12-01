import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';



export const Nav = styled.nav`
    background: transparent;
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
    margin-top: 75px;

    @media(max-width: 320x) 
    {
        position: absolute;
        top: 10px;
        left: 25px;
      
    }

`;

export const NavIcon = styled.div`

    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;

    p {
        transform: translate(-175%, 100%);
        font-weight: bold;
        font-size: 1.5rem;
        
    }

`;
