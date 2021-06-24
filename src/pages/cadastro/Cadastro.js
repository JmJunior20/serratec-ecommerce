import React, { useState } from 'react';
import { DivPersonalizada, DivPersonalizada2, DivPersonalizada3 } from '../../styles/geral-styles';
import { InputText, Button, ButtonSecond } from '../../styles/forms-styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';

import apiUsuario from "../../services/usuario-api";
import utilStorage from "../../utils/storage";

const Cadastro = () => {

    const[email, setEmail] = useState("");
    const[username, setUsername] = useState("");
    const[senha, setSenha] = useState("");
    const[cep, setCep] = useState("");
    const[logradouro, setLogradouro] = useState("");
    const[numero, setNumero] = useState("");

    const efetuarCadastro = () => {
        
        if(!username || !senha || !email){
            alert("Favor preencher todos os dados!")
            return;
        }

        apiUsuario.cadastrar(email, username, senha)
        .then(resposta => {
            // const { Authorization }  = resposta.data;
            // utilStorage.salvarTokenNaStorage(Authorization);
            window.open("/login", "_self");
        })
        .catch(erro => {
            console.log(erro);
        })
    }


    const history = useHistory();

    const handleClick = () => {
        history.push("/login");
    }

    return (
        <Container>
            <DivPersonalizada width="350px" border="1px solid #ddd" margin="auto" marginTop="20px" >
                <label htmlFor="email">Email</label>
                <InputText 
                    id="email"
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                ></InputText>


                <DivPersonalizada2 width="350px" border="1px" marginTop="20px">
                    <div>
                        <label htmlFor="senha">Senha</label>
                        <InputText
                            id="senha"
                            type="password"
                            value={senha} 
                            onChange={e => setSenha(e.target.value)}
                        ></InputText>
                    </div>

                    <div>
                        <label>Username</label>
                        <InputText
                            id="username"
                            value={username} 
                            onChange={e => setUsername(e.target.value)}
                        ></InputText>
                    </div>

                </DivPersonalizada2>
                <DivPersonalizada2>
                    <div>
                        <label>CEP</label>
                        <InputText
                            id="cep"
                            value={cep} 
                            onChange={e => setCep(e.target.value)}
                        ></InputText>
                    </div>
                    <div>
                        <label>Logradouro</label>
                        <InputText
                            id="logradouro"
                            value={logradouro} 
                            onChange={e => setLogradouro(e.target.value)}
                        ></InputText>
                    </div>
                </DivPersonalizada2>

                <DivPersonalizada3>
                    <div>
                        <label>Número</label>
                        <InputText
                            id="numero"
                            value={numero} 
                            onChange={e => setNumero(e.target.value)}
                        ></InputText>
                    </div>
                    <div>
                        <label>Bairro</label>
                        <InputText
                            id="bairro"
                        ></InputText>
                    </div>
                    <div>
                        <label>Cidade</label>
                        <InputText
                            id="cidade"
                        ></InputText>
                    </div>

                </DivPersonalizada3>

  

                    <label>Referência</label>
                    <InputText
                        id="ref"
                    ></InputText>

                    <Button onClick={efetuarCadastro}>Cadastrar</Button>
                    <ButtonSecond onClick={handleClick} type="button">Voltar</ButtonSecond>

            </DivPersonalizada>
        </Container>

    );
}

export default Cadastro;