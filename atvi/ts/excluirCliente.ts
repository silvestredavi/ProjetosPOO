import Cliente from "./cliente";
import Entrada from "./entrada";
import Excluir from "./excluir";

let executa = true

export default class ExcluirCliente extends Excluir {
    
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public Excluir(): void {
        let entrada = new Entrada();
        var cliente = entrada.receberTexto("Informe o CPF do cliente que deseja deletar");
        var index = this.clientes.findIndex( i => i.getCpf.getValor === cliente);
        console.log(`Cliente `+ this.clientes.find(i => i.getCpf.getValor === cliente)?.nome);
        console.log(`Realmente deseja excluir este cliente?`);
        var resp = entrada.receberNumero(`1 - Excluir, 2 - Cancelar`);
        if (resp == 1){
            this.clientes.splice(index, 1);
            console.log(`Cliente excluído com sucesso!`);
            console.log(`----------------------------------------`);
        } else {
            console.log(`Operação cancelada!`);
            
        }   
    }
    
}