import api from './api';

function adicionar(idDoClienteLogado, idProduto, quantidade) {

    return new Promise((resolve, reject) => {
        return api.post('/pedido/detalhes', {idDoClienteLogado, idProduto, quantidade})
        .then(response => resolve(response))
        .catch(error => reject(error))
    });

}

export default {
    adicionar
}