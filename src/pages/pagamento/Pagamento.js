import React, { useState, useEffect } from "react";
import apiUsuarios from "../../services/usuario-api";
import utilStorage from "../../utils/storage";

const Pagamento = () => {

    const [cliente, setCliente] = useState([]);

    const obtercliente = () => {
        apiUsuarios.obterTodos()
        .then(resposta =>{
            // Eu poderia varrer o data e para cada item que veio na requisição
            // montar um novo array de new Usuario e depois salvar no state.
            setCliente(resposta.data);
        })
        .catch(erro =>{
            console.log(erro);
        })
    }

    useEffect(() =>{

        let token = utilStorage.obterTokenNaStorage();

        if(!token){
            window.open("/login", "_self");
            return;
        }

        obtercliente();
    });

    return (
        <center>
            {cliente.map(cliente => (
                <div>
                    <p> <strong>Id:</strong> {cliente.id}</p>
                    <p> <strong>Nome:</strong> {cliente.nome}</p>
                    <p> <strong>E-mail:</strong> {cliente.email}</p>
                </div>                
            ))}
        </center>
    );
}

export default Pagamento;