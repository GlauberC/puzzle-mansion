class Tentativa{
    constructor(arrayTentativas, acertos){
        this._tentativa = arrayTentativas;
        this._acertos = acertos;
    }
    get tentativa(){
        return this._tentativa;
    }
    get tentativaString(){
        return this._tentativa.join(" ");
    }
    get acertosString(){
        return this._acertos.join(" ");
    }
    get acertosPosicao(){
        return this._acertos[0];
    }
    vetorAsterisco(){
        let asterisco = [];
        for(let i = 0; i<this._acertos[0];i++){
            asterisco.push("*")
        }
        return asterisco;
    }
    vetorInterrogacao(){
        let Interrogacao = [];
        for(let i = 0; i<this._acertos[1];i++){
            Interrogacao.push("?")
        }
        return Interrogacao;
    }
    get acertosCores(){
        return this._acertos[1];
    }
}