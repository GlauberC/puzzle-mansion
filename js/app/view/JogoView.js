class JogoView extends View{
    constructor(elemento){
        super(elemento);
    }
    template(model){
        return `
        <div class="input">
            <div value = "-1" onClick = "jogoController.mudarQuadrado(event)" class = quadrado></div>
            <div value = "-1" onClick = "jogoController.mudarQuadrado(event)" class = quadrado></div>
            <div value = "-1" onClick = "jogoController.mudarQuadrado(event)" class = quadrado></div>
            ${model.tamanho>3?'<div value = "-1" onClick = "jogoController.mudarQuadrado(event)" class = quadrado></div>' : ""}
            ${model.tamanho>4?'<div value = "-1" onClick = "jogoController.mudarQuadrado(event)" class = quadrado></div>' : ""}
        </div>
        <button onClick="jogoController.chutar()" class = "btn-chutar btn btn-block btn-primary btn-lg">Chutar!</button>
        `
    }
}