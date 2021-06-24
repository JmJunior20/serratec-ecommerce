import React, { useState } from 'react';
import { DivPersonalizada } from "../../styles/geral-styles";
import { InputText, Button, ButtonSecond } from "../../styles/forms-styles";
import { Link } from 'react-router-dom';

import apiUsuario from "../../services/usuario-api";
import utilStorage from "../../utils/storage";

const Login = () => {

    const[username, setUsername] = useState("");
    const[senha, setSenha] = useState("");

    const efetuarLogin = () => {
        
        if(!username || !senha){
            alert("Favor informar username e senha!")
            return;
        }

        apiUsuario.logar(username, senha)
        .then(resposta => {
            console.log(resposta);
            // const { token }  = resposta.data;
            // utilStorage.salvarTokenNaStorage(token);
            // window.open("/carrinho");
        })
        .catch(erro => {
            console.log(erro);
        })
    }

    return (
        <DivPersonalizada width="350px" border="1px solid #ddd" margin="auto" marginTop="20px">
            <label htmlFor="username">Login</label>
            <InputText 
                id="username" 
                value={username} 
                onChange={e => setUsername(e.target.value)} 
                placeholder="exemplo@exemplo.com"
            ></InputText>

            <label htmlFor="senha">Senha</label>
            <InputText 
                id="senha" 
                type="password" 
                value={senha} 
                onChange={e => setSenha(e.target.value)} 
                placeholder="123456"
            ></InputText>

            <Button onClick={efetuarLogin}>Continuar</Button>

            <p>Ao continuar, você concorda com as Condições de Uso da Amazon. Por favor verifique a Notificação de Privacidade, Notificações de Cookies e a Notificação de Anúncios Baseados em Interesse.</p>
            <p><Link to={'#'}>Esqueci minha senha</Link></p>

            <ButtonSecond>Criar sua conta gratis</ButtonSecond>

        </DivPersonalizada>
    );
}

export default Login;