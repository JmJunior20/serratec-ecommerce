import React from 'react';
import Card4 from '../../components/models/CardMain2';
import { useHistory } from 'react-router-dom';

import { Button, InputText } from '../../styles/forms-styles' ;

const Composicao = () => {

    const history = useHistory();

    const handleClick = () => {
        history.push("/pagamento");
    }

    return (
        <Card4 
        header={"Qtd em estoque:"}
        main={"Qtd:"} 
        main2={"Calcular frete"} 
        main3={<InputText></InputText>} 
        footer={<Button>Adicionar ao Carrinho</Button>}
        footer2={<Button onClick={handleClick}>Comprar</Button>}
        ></Card4>

    )



}
export default Composicao;