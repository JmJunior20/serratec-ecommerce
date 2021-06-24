import api from './api';

function logar(username, senha) {

    return new Promise((resolve, reject) => {
        return api.post('/login', {username, senha})
        .then(response => resolve(response))
        .catch(error => reject(error))
    });

}

function obterTodos(){
    return new Promise((resolve, reject) => {
        return api.get('/cliente')
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}

export default {
    logar,
    obterTodos
}