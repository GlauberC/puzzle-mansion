class Mensagem{
    constructor(texto="", tipo = -1){
        this._texto = texto;
        this._tipo = tipo;
    }
    get texto(){
        return this._texto;
    }
    get status(){
        return this._status;
    }
    get mensagem(){
        let msg = "";
        if(this._tipo == 0){
            msg = `<p class= "alert alert-info">${this._texto}</p>`
        }else if(this._tipo == 1){
            msg = `<p class= "alert alert-success">${this._texto}</p>`
        }else if(this._tipo == 2){
            msg = `<p class= "alert alert-warning">${this._texto}</p>`
        }else if(this._tipo == 3){
            msg = `<p class= "alert alert-danger">${this._texto}</p>`
        }else{
            msg = "";
        }
        return msg;
    }
}