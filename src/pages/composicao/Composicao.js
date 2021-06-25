import React, { useState, useEffect } from "react";
import Card4 from '../../components/models/CardMain2';
import { useHistory } from 'react-router-dom';
import { DivPersonalizada5 } from "../../styles/geral-styles";
import { Link } from 'react-router-dom';

import { Button, InputText } from '../../styles/forms-styles';

import apiProduto from "../../services/produtos-api";

const Composicao = () => {

    const [produto, setProduto] = useState([]);

    const history = useHistory();

    const handleClick = () => {
        history.push("/pagamento");
    }

    apiProduto.obterPorId(produto.id)
    .then(resposta =>{
                // Eu poderia varrer o data e para cada item que veio na requisição
                // montar um novo array de new Usuario e depois salvar no state.
                setProduto(resposta.data);
            })
            .catch(erro =>{
                console.log(erro);
    })


    return (
        <Card4 >
            {/* <div>
                <p>Qtd em estoque: {produto.quantidadeEmEstoque}
                </p>
            </div> */}

            <DivPersonalizada5>
                Qtd:
                <InputText type="Number"></InputText>
            </DivPersonalizada5>

            <div>
                <br></br>
                <label>Calcular frete:</label>
                <InputText placeholder="CEP"></InputText>
            </div>

            <Link to={"/carrinho"}>
                <Button>Adicionar ao Carrinho</Button>
            </Link>
        
    
        {<Button onClick={handleClick}>Comprar</Button>}
        

        </Card4>

    )



}
export default Composicao;