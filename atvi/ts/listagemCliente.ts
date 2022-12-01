import Cliente from "./cliente";
import Listagem from "./listagem";

export default class ListagemCliente extends Listagem{
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public listar(): void {
        console.log(`\nLista de clientes:`);
        if(this.clientes.length > 0)
        {
            this.clientes.forEach(cliente => {
                console.log(`Nome: ` + cliente.nome);
                console.log(`Nome social: ` + cliente.nomeSocial);
                console.log(`Gênero: `+ cliente.genero);
                console.log(`RGs:`);
                cliente.getRgs.forEach(rg =>{
                    console.log(`Nº ` + rg.getNumero + ` - Data de Emissão: ` + rg.getDataEmissao.toLocaleDateString()); 
                });
                console.log(`Telefones:`);
                cliente.getTelefones.forEach(tel =>{
                    console.log(`(` + tel.getDdd + `) ` + tel.getNumero); 
                });
                console.log(`--------------------------------------`);
            });
        }
        else
        {
            console.log(`\nNão há clientes cadastrados!`);
        }
            
        console.log(`\n`);
    }
}