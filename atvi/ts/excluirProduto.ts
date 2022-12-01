import Entrada from "./entrada"
import Excluir from "./excluir"
import Produto from "./produto"

let executa = true

export default class ExcluirProduto extends Excluir {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public Excluir(): void {
        var produto = this.entrada.receberTexto("Informe o código do produto que deseja excluir: ");
        var index = this.produtos.findIndex( i => i.getCod === produto);
        console.log(`Produto `+ this.produtos.find(i => i.getCod === produto)?.nome);
        console.log(`Realmente deseja excluir este produto?`);
        var resp = this.entrada.receberNumero(`1 - Excluir, 2 - Cancelar\n`);
        if (resp == 1){
            this.produtos.splice(index, 1);
            console.log(`Produto excluído com sucesso!`);
            console.log(`----------------------------------------`);
        } else {
            console.log(`Operação cancelada!`);
            
        }   
    }
}