export class Funcionario{
   constructor(){
    this._nome = nome; 
    this._salario = salario;
    this._cpf = cpf; 

    this._bonificacao = 1;

    this._senha;
   }

   cadastraSenha(senha){

        this._senha = senha;
    
   }

   get senha(){
    return this._senha;
   }

}