import Atualizar from "./atualizar";
import Entrada from "./entrada";
import Produto from "./produto";

export default class AtualizarProduto extends Atualizar {
        private produtos: Array<Produto>
        private entrada: Entrada
        constructor(produtos: Array<Produto>) {
            super()
            this.produtos = produtos
            this.entrada = new Entrada()
        }
        
        public Atualizar(): void {
            console.log(`\nAtualização do produto`);
            let busca = this.entrada.receberTexto(`Por favor informe o código do produto que deseja alterar: `);
            
            this.produtos.forEach(produto => {
                if (produto.getCod == busca){
                    let executa = true
                    while (executa){
                        console.log(`Produto encontrado foi ${produto.nome}. Qual campo deseja alterar?`);
                        let confirma = this.entrada.receberNumero(`1 - Nome do produto, 2 - Preço, 0 - Sair\n`)
                        switch(confirma){
                            case 1:
                                produto.nome = this.entrada.receberTexto(`Digite o novo nome: `)
                                console.log(`Nome do produto atualizado com sucesso!`);
                                break
                            case 2:
                                console.log(`O preço atual do serviço é ${this.formatter.format(produto.getValor)}\n`);
                                var valor = this.entrada.receberTexto(`Digite o novo preço: `)
                                var precoFormat = valor.replace(" ","").replace("R","").replace("$","").replace(".","").replace(",",".");
                                produto.setValor(parseInt(precoFormat))
                                console.log(`Preço do produto atualizado com sucesso!`);
                                break
                            case 0:
                                executa = false;
                                console.log(`Obrigado!`);
                            default:
                                console.log("Digite uma opção válida!");
                                break;    
                        }
                    }
                }
                else{
                    console.log(`\n Nenhum produto encontrado com o código informado. \n`); 
                }
            })

                
                        
        }
 
}