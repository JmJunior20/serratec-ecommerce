import React, { useState, useEffect } from "react";
import Card from "../../components/cards/CardHome";
import "../../styles/styles.css";
import Image from "./Image";
//import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';

import apiUsuarios from "../../services/produtos-api";

const Home = () => {

    const [produto, setProduto] = useState([]);

    const obterProdutos = () => {
        apiUsuarios.obterTodos()
        .then(resposta =>{
            // Eu poderia varrer o data e para cada item que veio na requisição
            // montar um novo array de new Usuario e depois salvar no state.
            setProduto(resposta.data);
        })
        .catch(erro =>{
            console.log(erro);
        })
    }

    useEffect(() =>{        

        obterProdutos();
    });

    // const history = useHistory();

    // const handleClick = () => {
    //     history.push('/produto');
    // }
   

    return (
        <div id="cardsContainer">
            {produto.map(produto => (
                <Card titulo="Numeros" key={produto.id}>
                    <main>
                        <h3>{produto.id}</h3>
                        <Image>
                            <img src={produto.url} />
                        </Image>
                        <h3>{produto.nome}</h3>
                        {/* <Button onClick={handleClick} variant="contained" color="primary">Comprar</Button> */}
                        <Link to={`/produto/${produto.id}`}>
                            <h2>{produto.nome}</h2>
                        </Link>
                    </main>
                </Card>
            ))}
        </div>
    );
}

export default Home;