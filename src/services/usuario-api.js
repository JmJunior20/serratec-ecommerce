import api from './api';

function logar(username, senha) {

    return new Promise((resolve, reject) => {
        return api.post('/login', {username, senha})
        .then(response => resolve(response))
        .catch(error => reject(error))
    });

}

export default {
    logar
}