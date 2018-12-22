class Jogo{
    constructor(dificuldade){
        this._dificuldade = dificuldade;    // 0, 1, 2
        this._tamanho = dificuldade + 3;
        this._resposta = [];
        for(let i = 0; i< this._tamanho; i++){
            this._resposta.push(Math.floor((Math.random() * 5)));
        }
    }

    get reposta(){
        return this._resposta;
    }
    get dificuldade(){
        return this._dificuldade;
    }
    get tamanho(){
        return this._tamanho;
    }
    acertos(arrayTentativa){
        let erros = []
        let errosResposta = []
        let acertosPosicao = 0;
        for(let i = 0; i<arrayTentativa.length; i++){
            if(parseInt(arrayTentativa[i]) == this._resposta[i]){
                acertosPosicao++;
            }else{
                erros.push(parseInt(arrayTentativa[i]));
                errosResposta.push(this._resposta[i]);
            }
        }
        let acertosCores = 0;
        
        for(let j = 0; j < erros.length; j++){
            let index = errosResposta.indexOf(erros[j]);
            if(index != -1){
                errosResposta.splice(index, 1);
                acertosCores++;
            }
        }

        return [acertosPosicao, acertosCores];

    }
    acabou(acertosPosicao){
        if(acertosPosicao == this._tamanho){
            return true;
        }else{
            return false;
        }
    }



}