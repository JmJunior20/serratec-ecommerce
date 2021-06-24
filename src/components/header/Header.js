import React from 'react';
import { Link } from "react-router-dom";
import { NavBar } from "../../styles/header-styles";
import { InputTextDois } from "../../styles/forms-styles";

const Menu = () => {

    return (
        <NavBar>
            <a>
                <Link to={'/'}>Logo</Link>
            </a>
                
                <InputTextDois 
                id="email" placeholder="Pesquisar"
                ></InputTextDois>

            <a>
                <Link to={'/carrinho'}>Carrinho</Link>
            </a>
                
                  
        </NavBar>
    );
}

export default Menu;