class ListaTentativasView extends View{
    constructor(elemento){
        super(elemento);
    }
    template(model){
        return `
        <table class = "table table-striped">
            <thead>
                <tr>
                    <th>Chute</th>
                    <th>Acerto</th>
                </tr>
            </thead>
            <tbody class = "tabela-body">
                ${
                    model.tentativas.map(n => `
                    <tr>
                        <td>
                            ${n.tentativa.map(m => `
                            <span class="mini-quadrado q${m}"></span>`
                            ).join('')}                        
                        </td>
                        <td>
                        ${n.vetorAsterisco().map(i => `
                        <span class="mini-quadrado mini-acertos">${i}</span>`
                        ).join('')}
                        ${n.vetorInterrogacao().map(j => `
                        <span class="mini-quadrado mini-acertos">${j}</span>`
                        ).join('')}
                        
                        </td>
                    </tr>
                    `).join('')
                }

            </tbody>
        </table>
        <button class = "btn-cancelar btn btn-block btn-danger" onClick="jogoController.cancelaPartida()">Voltar à seleção de dificuldade</button>
        `
    }
}