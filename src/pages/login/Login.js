import React from 'react';
import { DivPersonalizada } from "../../styles/geral-styles";
import { InputText, Button, ButtonSecond } from "../../styles/forms-styles";
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <DivPersonalizada width="400px" border="1px solid #ddd" margin="auto" marginTop="50px">
            <label htmlFor="email">Email</label>
            <InputText id="email" placeholder="exemplo@exemplo.com"></InputText>

            <label htmlFor="senha">Senha</label>
            <InputText id="senha" type="password" placeholder="123456"></InputText>
            <Button>Continuar</Button>

            <p>Ao continuar, você concorda com as Condições de Uso da Amazon. Por favor verifique a Notificação de Privacidade, Notificações de Cookies e a Notificação de Anúncios Baseados em Interesse.</p>
            <p><Link to={'#'}>Esqueci minha senha</Link></p>

            <ButtonSecond>Criar sua conta gratis</ButtonSecond>
        </DivPersonalizada>
    );
}

export default Login;