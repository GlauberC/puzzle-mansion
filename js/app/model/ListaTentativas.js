class ListaTentativas{
    constructor(){
        this._tentativas = [];
    }
    adiciona(tentativa){
        this._tentativas.unshift(tentativa);
    }
    get tentativas(){
        return [].concat(this._tentativas);
    }
}