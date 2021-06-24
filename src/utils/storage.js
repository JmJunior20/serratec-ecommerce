function salvarTokenNaStorage( Authorization ){
    localStorage.setItem('Authorization', Authorization)
}

function obterTokenNaStorage(){
    return localStorage.getItem('Authorization');
}

function removerAutenticacao(){
    localStorage.removeItem('Authorization');
}

export default {
    salvarTokenNaStorage,
    obterTokenNaStorage,
    removerAutenticacao
}