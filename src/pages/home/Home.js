import React, { useState, useEffect } from "react";
import Card from "../../components/cards/CardHome";
import "../../styles/styles.css";
import Image from "./Image";
import { Link } from 'react-router-dom';

import apiUsuarios from "../../services/produtos-api";

const Home = () => {

    const [produto, setProduto] = useState([]);

    const obterProdutos = () => {
        apiUsuarios.obterTodos()
        .then(resposta =>{
            setProduto(resposta.data);
        })
        .catch(erro =>{
            console.log(erro);
        })
    }

    useEffect(() =>{        

        obterProdutos();
    });   

    return (
        <div id="cardsContainer">
            {produto.map(produto => (
                
                <Card titulo="Numeros" key={produto.id}>                    
                    <main>
                        <Link to={`/produto/${produto.id}`}>
                            <Image>
                                <img src={produto.url} />
                            </Image>
                        </Link>
                        <h3>{produto.nome}</h3>
                                               
                    </main>                    
                </Card>
                
            ))}
        </div>
    );
}

export default Home;