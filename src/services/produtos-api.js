import api from "./api";

function obterTodos(){
    return new Promise((resolve, reject) => {
        return api.get('/produto')
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}

function obterProdutosPorCategoria(idCategoria) {
    return new Promise((resolve, reject) => {
        return api.get(`/categoria/${idCategoria}/produtos`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}

function obterPorId(){
    return new Promise((resolve, reject) => {
        return api.get('/produto')
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}

export default {
    obterTodos,
    obterProdutosPorCategoria,
    obterPorId
}