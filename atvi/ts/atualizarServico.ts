import Atualizar from "./atualizar";
import Entrada from "./entrada";
import Servico from "./servico";

export default class AtualizarProduto extends Atualizar {
        private servicos: Array<Servico>
        private entrada: Entrada
        constructor(servicos: Array<Servico>) {
            super()
            this.servicos = servicos
            this.entrada = new Entrada()
        }
        
        public Atualizar(): void {
            console.log(`\nAtualização do Serviço`);
            let busca = this.entrada.receberTexto(`Por favor informe o código do serviço que deseja alterar: `);
            
            this.servicos.forEach(servico => {
                if (servico.getCod == busca){
                    let executa = true
                    while (executa){
                        console.log(`Serviço encontrado foi ${servico.nome}. Qual campo deseja alterar?`);
                        let confirma = this.entrada.receberNumero(`1 - Nome do serviço, 2 - Preço, 0 - Sair\n`)
                        switch(confirma){
                            case 1:
                                servico.nome = this.entrada.receberTexto(`Digite o novo nome: `)
                                console.log(`Nome do serviço atualizado com sucesso!`);
                                break
                            case 2:
                                console.log(`O preço atual do serviço é ${this.formatter.format(servico.getValor)}\n`);
                                var valor = this.entrada.receberTexto(`Digite o novo preço: `)
                                var precoFormat = valor.replace(" ","").replace("R","").replace("$","").replace(".","").replace(",",".");
                                servico.setValor(parseInt(precoFormat))
                                console.log(`Preço do serviço atualizado com sucesso!`);
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