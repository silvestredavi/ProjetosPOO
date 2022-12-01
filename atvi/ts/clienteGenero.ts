import Cliente from "./cliente";
import Listagem from "./listagem";

export default class GeneroCliente extends Listagem{
    private clientes:Array<Cliente>
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public listar(): void {
        let masc: Cliente[] = [];
        let fem: Cliente[] = [];

        this.clientes.forEach( clientes => {
            if(clientes.genero === "Masculino"){
                masc.push(clientes);
            } else if( clientes.genero === "Feminino"){
                fem.push(clientes);
            }
        })       

        console.log("Listagem de Clientes por Gênero");
        console.log("Masculino: \n");

        //Masculino
        console.log(`\n----------------------------------------\n`);
        masc.forEach(masc=>{
            console.log(`\nLista de clientes:`);
            this.clientes.forEach(cliente => {
                console.log(`Nome: ` + cliente.nome);
                console.log(`Nome social: ` + cliente.nomeSocial);
                console.log(`Gênero: ` + cliente.genero);
                console.log(`CPF: ` + cliente.getCpf.getValor);
                console.log(`Data de emissão CPF: ` + cliente.getCpf.getDataEmissao.toLocaleDateString());            
    
                let rgs = cliente.getRgs;
                for (let i = 0; i < rgs.length; i++) {
                    console.log(`Rg: ` + rgs[i].getNumero)
                    console.log(`Data Emissão RG: ` + rgs[i].getDataEmissao.toLocaleDateString())
                }
                let telefones = cliente.getTelefones;
                for (let i = 0; i < telefones.length; i++) {
                    console.log('Telefone: (' + telefones[i].getDdd + ') '+ telefones[i].getNumero);
                }
    
                console.log(`--------------------------------------`);
            });
        })

        //Feminino
        console.log("Feminino:");
        console.log("\n");
        fem.forEach( fem => {
            console.log(`\nLista de clientes:`);
            this.clientes.forEach(cliente => {
                console.log(`Nome: ` + cliente.nome);
                console.log(`Nome social: ` + cliente.nomeSocial);
                console.log(`Gênero: ` + cliente.genero);
                console.log(`CPF: ` + cliente.getCpf.getValor);
                console.log(`Data de emissão CPF: ` + cliente.getCpf.getDataEmissao.toLocaleDateString());            

                let rgs = cliente.getRgs;
                for (let i = 0; i < rgs.length; i++) {
                    console.log(`Rg: ` + rgs[i].getNumero)
                    console.log(`Data Emissão RG: ` + rgs[i].getDataEmissao.toLocaleDateString())
                }
                let telefones = cliente.getTelefones;
                for (let i = 0; i < telefones.length; i++) {
                    console.log('Telefone: (' + telefones[i].getDdd + ') '+telefones[i].getNumero);
                }

                console.log(`--------------------------------------`);
            });
        })
    }
}