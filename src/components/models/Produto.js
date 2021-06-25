export default class Produto{
    constructor(obj){
        obj=obj||{};

        this.id = obj.id;
        this.nome= obj.nome;
        this.descricao=obj.descricao;
        this.preco=obj.preco;
        this.quantidadeEmEstoque=obj.quantidadeEmEstoque;
        this.dataCadastro=obj.dataCadastro;
        this.idCategoria=obj.idCategoria;
        this.url=obj.url;
      

        // this.id = obj.id;
        // this.nome= obj.nome;
        // this.quantidade=obj.quantidade;
        // this.valor=obj.valor;
        // this.url_image = obj.url_image;
    }
}