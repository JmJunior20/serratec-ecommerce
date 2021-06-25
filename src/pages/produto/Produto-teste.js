import React, { useState, useEffect } from "react";
import { DivPersonalizada4 } from '../../styles/geral-styles';
import Composicao from "../composicao/Composicao";


import apiProduto from "../../services/produtos-api";

const Produto = () => {

    const [produto, setProduto] = useState([]);

    // const recuperarProduto = () => {
    //     // recupera id do produto a partir da url
    //     const id = window.location.href.split("produto/")[1];
    
    //     apiProduto
    //       .obterProdutoPorId(id)
    //       .then((resposta) => {
    //         setProduto(resposta.data);
    //       })
    //       .catch((erro) => {
    //         alert("Erro ao listar produtos! Verifique o console.");
    //         console.log(erro);
    //       });
    //   };
    
    //   useEffect(() => {
    
    //     recuperarProduto();
    //   }, []);

    apiProduto.obterPorId(produto.id)
    .then(resposta =>{
                // Eu poderia varrer o data e para cada item que veio na requisição
                // montar um novo array de new Usuario e depois salvar no state.
                setProduto(resposta.data);
            })
            .catch(erro =>{
                console.log(erro);
            })

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

// render(){
//     const {produto}=this.state;
//     return(
//          <div className="detalhes-produtos" >
//                  <div className="produtos" key={produto.id}>
//                      <p><strong>id:</strong>{produto.id}</p>
//                      <p><strong>Nome:</strong>{produto.nome}</p>
//                      <p><strong>Preço:</strong>{produto.preco}</p>
//                      <p><a target='_blank' href={produto.url}>{produto.url}</a></p>
//                      <p><Link to={'/produto'}>voltar</Link></p>
//                  </div>
//          </div>