import React from 'react';
import { Link } from "react-router-dom";
import { NavBar } from "../../styles/geral-styles";

const Menu = () => {

    return (
        <NavBar>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/login'}>Login</Link>
            </li>
            <li>
                <Link to={'/produto'}>Produto</Link>
            </li>
            <li>
                <Link to={'/carrinho'}>Carrinho</Link>
            </li>            
        </NavBar>
    );
}

export default Menu;