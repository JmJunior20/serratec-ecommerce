import React, { useState } from 'react';
import { DivPersonalizada } from "../../styles/geral-styles";
import { InputText, Button, ButtonSecond } from "../../styles/forms-styles";
import { Link } from 'react-router-dom';

import apiUsuario from "../../services/usuario-api";
import utilStorage from "../../utils/storage";

const Login = () => {

    const[email, setEmail] = useState("");
    const[senha, setSenha] = useState("");

    const efetuarLogin = () => {
        
        if(!email || !senha){
            alert("Favor informar email e senha!")
            return;
        }

        apiUsuario.logar(email, senha)
        .then(resposta => {
            const { token }  = resposta.data;
            utilStorage.salvarTokenNaStorage(token);
            window.open("/carrinho");
        })
        .catch(erro => {
            console.log(erro);
        })
    }

    return (
        <DivPersonalizada width="400px" border="1px solid #ddd" margin="auto" marginTop="50px">
            <label htmlFor="email">Email</label>
            <InputText 
                id="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
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

            <ButtonSecond onClick={"/cadastro"}>Criar sua conta gratis</ButtonSecond>

        </DivPersonalizada>
    );
}

export default Login;