import Listagem from "./listagem";
import Servico from "./servico";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
    }

    public listar(): void {
        console.log(`\nLista dos serviços:`);
        if(this.servicos.length > 0){
            this.servicos.forEach(serv => {
                console.log("Código: "+serv.getCod+" - "+serv.nome+"\nPreço: "+this.formatter.format(serv.getValor));
                console.log(`--------------------------------------`);
            });
        } else {
            console.log(`\nNão há serviços cadastrados!`);
            
        }
        console.log(`\n`);
    }
}