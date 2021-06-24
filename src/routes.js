import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Menu from "./components/menu/Menu";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Produto from "./pages/produto/Produto";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Carrinho from "./pages/carrinho/Carrinho";
import Pagamento from "./pages/pagamento/Pagamento";

const Routes = () => (
    <BrowserRouter>
        <Header></Header>
        <Menu></Menu>
        <Switch>
            <Route exact path={'/'} component={Home}></Route>
            <Route path={'/produto'} component={Produto}></Route>
            <Route path={'/login'} component={Login}></Route>
            <Route path={'/cadastro'} component={Cadastro}></Route>
            <Route path={'/carrinho'} component={Carrinho}></Route>
            <Route path={'/pagamento'} component={Pagamento}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;