import Listagem from "./listagem";
import Produto from "./produto";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
    }

    public listar(): void {
        console.log(`\nLista de produtos:`);
        if(this.produtos.length > 0){
            this.produtos.forEach(prod => {
                console.log(`Código `+prod.getCod+` - `+prod.nome+`\nValor: `+this.formatter.format(prod.getValor));
                console.log(`--------------------------------------`);
            });
        } else {
            console.log(`\nNão há produtos cadastrados`);
            
        }
        
        console.log(`\n`);
    }
}