import Entrada from "./entrada"
import Excluir from "./excluir"
import Servico from "./servico"

let executa = true

export default class ExcluirServico extends Excluir {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public Excluir(): void {
        var serviço = this.entrada.receberTexto("Informe o código do serviço que deseja excluir: ");
        var index = this.servicos.findIndex( i => i.getCod === serviço);
        console.log(`Serviço `+ this.servicos.find(i => i.getCod === serviço)?.nome);
        console.log(`Realmente deseja excluir este produto?`);
        var resp = this.entrada.receberNumero(`1 - Excluir, 2 - Cancelar`);
        if (resp == 1){
            this.servicos.splice(index, 1);
            console.log(`Serviço excluído com sucesso!`);
            console.log(`----------------------------------------`);
        } else {
            console.log(`Operação cancelada!`);
            
        }   
    }
}