class MensagemView extends View{
    constructor(elemento){
        super(elemento)
    }
    template(model){
        return model.mensagem;
    }
}