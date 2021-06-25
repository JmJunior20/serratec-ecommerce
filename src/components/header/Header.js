import React from 'react';
import { Link } from "react-router-dom";
import { NavBar } from "../../styles/header-styles";
import { InputTextDois } from "../../styles/forms-styles";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

const Menu = () => {

    return (
        <NavBar>
            <a>
                <Link to={'/'}><h1 color="red"><ImportContactsIcon /> SerraBook</h1></Link>
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