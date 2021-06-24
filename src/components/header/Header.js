import React from 'react';
import { Link } from "react-router-dom";
import { NavBar } from "../../styles/header-styles";
import { InputTextDois } from "../../styles/forms-styles";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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
                <Link to={'/login'}><AccountCircleIcon /></Link>
                <Link to={'/carrinho'}><ShoppingCartIcon /></Link>
            </a>               
                  
        </NavBar>
    );
}

export default Menu;