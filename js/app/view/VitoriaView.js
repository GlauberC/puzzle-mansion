class VitoriaView extends View{
    constructor(elemento){
        super(elemento);
    }
    template(model){
        return `
            <h1>Você venceu, parabens!!!</h1>
            <h3>Número de tentativas: ${model}<h3>
            <button class = "btn btn-block btn-danger" onClick="jogoController.cancelaPartida()">Jogar Novamente</button>
        `
    }
}