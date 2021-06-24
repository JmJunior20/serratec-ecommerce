function salvarTokenNaStorage( token ){
    localStorage.setItem('token', token)
}

function obterTokenNaStorage(){
    return localStorage.getItem('token');
}

function removerAutenticacao(){
    localStorage.removeItem('token');
}

export default {
    salvarTokenNaStorage,
    obterTokenNaStorage,
    removerAutenticacao
}