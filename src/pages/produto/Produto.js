import React from 'react';
import { DivPersonalizada4 } from '../../styles/geral-styles';
import Composicao from "../composicao/Composicao";
import Image from "./Image";


//import apiProduto from "../../services/produtos-api";
//import './index.css';
import api from "../../services/api";
import Produto from "../../components/models/Produto";

export default class Detalhes extends React.Component{
    state = {
        produto: {}
    }
    async componentDidMount (){
        const {id}=this.props.match.params;
        const resposta = await api.get(`/produto/${id}`);
        this.setState({produto:new Produto (resposta.data)});
    }

    render(){
        const {produto}=this.state;
        return(
             <div className="detalhes-produtos" >
                     <div className="produtos" key={produto.id}>
                        <DivPersonalizada4 
                            // width="100%" 
                            // height="100%"
                            // margin="auto" 
                            marginTop="50px"
                        >
                            <div>
                            <Image>
                            <   img src={produto.url} />
                            </Image>              
                            </div>
                            <div id="descricao">
                                <h1>{produto.nome}</h1>
                                <h3>{produto.descricao}</h3>
                                <h3>Preço R$ {produto.preco}</h3>
                            </div>
                            <Composicao></Composicao>
                        </DivPersonalizada4>
                     </div>  
            </div>   
        );
    };
}