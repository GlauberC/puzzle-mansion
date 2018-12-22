class JogoController {
    constructor(){
        this._numeroDeJogadas;
        this._areaDificuldade = document.querySelector(".area-escolhe-dificuldade");
        this._areaJogo = document.querySelector(".area-jogo");
        this._jogoView = new JogoView(document.querySelector(".area-tentativa"));
        this._areaVitoria = document.querySelector(".area-vitoria");
        this._listaTentativas = new ListaTentativas();
        this._listaTentativasView = new ListaTentativasView(document.querySelector(".area-tabela"));
        this._vitoriaView = new VitoriaView(this._areaVitoria);
        
    }

    comecaPartida(dificuldade){
        this._jogo = new Jogo(dificuldade);
        this._jogoView.update(this._jogo);
        JogoHelper.telaJogo(this._areaDificuldade, this._areaJogo, this._areaVitoria);
        this._numeroDeJogadas = 0;
        this._listaTentativasView.update(this._listaTentativas);
    }
    chutar(){
        let arrayTentativa = [];
        document.querySelectorAll(".quadrado").forEach(n => arrayTentativa.push(n.attributes[0].value));
        if(!arrayTentativa.includes("-1")){       
            this._tentativa = new Tentativa(arrayTentativa, this._jogo.acertos(arrayTentativa));
            
            this._listaTentativas.adiciona(this._tentativa);
            
            this._listaTentativasView.update(this._listaTentativas);
            this._numeroDeJogadas++;
            if(this._jogo.acabou(this._tentativa.acertosPosicao)){
                this._vitoriaView.update(this._numeroDeJogadas);
                JogoHelper.telaVitoria(this._areaVitoria);
            }
        }
        
    }
    cancelaPartida(){
        this._listaTentativas = new ListaTentativas();
        this._listaTentativasView.update(this._listaTentativas);
        JogoHelper.telaDificuldade(this._areaDificuldade, this._areaJogo);
    }
    mudarQuadrado(event){
        let quadrado = event.target;
        let valor = event.target.attributes[0].value;

        if(valor != -1){
            quadrado.classList.remove(`q${valor}`)
        }
        quadrado.classList.add(`q${(parseInt(valor)+1)%5}`) 
        event.target.attributes[0].value = (parseInt(valor) + 1)%5;       
    }
}