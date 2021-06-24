import React from 'react';
import { DivPersonalizada, DivPersonalizada2, DivPersonalizada3 } from '../../styles/geral-styles';
import { InputText, Button, ButtonSecond } from '../../styles/forms-styles';
import Container from '@material-ui/core/Container';
import { Link, useHistory } from 'react-router-dom';

const Cadastro = () => {

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
                    placeholder="exemplo@exemplo.com"
                ></InputText>


                <DivPersonalizada2 width="350px" border="1px" marginTop="20px">
                    <div>
                        <label htmlFor="senha">Senha</label>
                        <InputText
                            id="senha"
                            type="password"
                            placeholder="123456"
                        ></InputText>
                    </div>

                    <div>
                        <label>UserName</label>
                        <InputText></InputText>
                    </div>

                </DivPersonalizada2>
                <DivPersonalizada2>
                    <div>
                        <label>CEP</label>
                        <InputText></InputText>
                    </div>
                    <div>
                        <label>Logradoro</label>
                        <InputText></InputText>
                    </div>
                </DivPersonalizada2>

                <DivPersonalizada3>
                    <div>
                        <label>Número</label>
                        <InputText></InputText>
                    </div>
                    <div>
                        <label>Bairro</label>
                        <InputText></InputText>
                    </div>
                    <div>
                        <label>Cidade</label>
                        <InputText></InputText>
                    </div>

                </DivPersonalizada3>

  

                    <label>Referência</label>
                    <InputText></InputText>

                    <Button>Cadastrar</Button>
                    <ButtonSecond onClick={handleClick} type="button">Voltar</ButtonSecond>

            </DivPersonalizada>
        </Container>

    );
}

export default Cadastro;