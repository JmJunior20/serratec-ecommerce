import React from 'react';
import { Link } from "react-router-dom";
import { NavBar } from "../../styles/header-styles";
import { InputTextDois } from "../../styles/forms-styles";
import { FiShoppingCart } from "react-icons/fi";

const Menu = () => {

    return (
        <NavBar>
            <a>
                <Link to={'/'}><img src="https://i.pinimg.com/564x/f7/63/03/f7630358b6c2e058381a34be8d2736d8.jpg"></img></Link>
            </a>
                
                <InputTextDois 
                id="busca" placeholder="Pesquisar"
                ></InputTextDois>

            <a>
                <Link to={'/carrinho'}><FiShoppingCart /></Link>
            </a>               
                  
        </NavBar>
    );
}

export default Menu;