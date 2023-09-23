export interface Usuario{
    id?: any;
    nome: String;
    cpf: String;
    email: String;
    datanascimento: any;
    senha: String;
    perfis: [];
    loja: {
        nomeempresa: String
    }
}