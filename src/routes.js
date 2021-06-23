import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Menu from "./components/menu/Menu";
import Home from "./pages/home/Home";
import Produto from "./pages/produto/Produto";
import Login from "./pages/login/Login";
import Carrinho from "./pages/carrinho/Carrinho";

const Routes = () => (
    <BrowserRouter>
        <Menu></Menu>
        <Switch>
            <Route exact path={'/'} component={Home}></Route>
            <Route path={'/produto'} component={Produto}></Route>
            <Route path={'/login'} component={Login}></Route>
            <Route path={'/carrinho'} component={Carrinho}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;