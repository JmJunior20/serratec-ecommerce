import React, { useState, useEffect } from "react";
import { DivPersonalizada4 } from '../../styles/geral-styles';
import Composicao from "../composicao/Composicao";


import apiUsuarios from "../../services/produtos-api";

const Produto = () => {

    const [produto, setProduto] = useState([]);

    // const obterProdutos = () => {
    //     apiUsuarios.obterPorId(produto.id)
    //     .then(resposta =>{
    //         // Eu poderia varrer o data e para cada item que veio na requisição
    //         // montar um novo array de new Usuario e depois salvar no state.
    //         setProduto(resposta.data);
    //     })
    //     .catch(erro =>{
    //         console.log(erro);
    //     })
    // }

    // useEffect(() =>{        

    //     obterProdutos();
    // });
    

    return (
        <DivPersonalizada4 
            // width="100%" 
            // height="100%"
            // margin="auto" 
            marginTop="50px"
        >
            {produto.map(produto => (
                <div>
                    <div>
                        <h1>Imagem</h1>                
                    </div>
                    <div>
                        <h3>{produto.nome}</h3>
                    </div>
                    <Composicao></Composicao>
                </div>
            ))}
        </DivPersonalizada4>
    );
}

export default Produto;