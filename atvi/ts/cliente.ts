import Cadastro from "./cadastro"
import cpf from "./cpf"
import Produto from "./produto"
import Rg from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    public genero: string
    private CPF: cpf
    private rgs: Rg[] = []
    private dataCadastro: Date
    private telefones: Telefone[] = []
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>

    constructor(nome: string, nomeSocial: string, genero: string, CPF: cpf, rgs: Rg [],  telefones: Telefone[]){
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.genero = genero
        this.CPF = CPF
        this.rgs = rgs
        this.dataCadastro = new Date()
        this.telefones = telefones
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }
    

    public get getCpf(): cpf {
        return this.CPF
    }
    public set setCpf(cpf: cpf) {
        this.CPF = cpf
    }
    public get getRgs(): Rg[] {
        return this.rgs
    }

    public set setRgs(rg: Rg[]) {
        this.rgs = rg
        
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public set setTelefone(telefone: Telefone){
        this.telefones = this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }

    public addServicos(servico?: Servico): void {
        if (!servico) {
            console.log("Este serviço não existe!");
        }
        else {
            this.servicosConsumidos.push(servico)
        }

    }
    public addProduto(produto?: Produto): void {
        if (!produto) {
            console.log("Este produto não existe!");
        }
        else {
            this.produtosConsumidos.push(produto)
        }
    }
    public addRg(rg:Rg){
        this.rgs.push(rg);
    }
    public addTel(telefone:Telefone){
        this.telefones.push(telefone);
    }
}