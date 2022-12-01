export default class Servico{
    private cod!: string
    public nome!: string
    private valor!: number

    constructor(nome:string, cod:string, valor:number){
        this.nome = nome
        this.cod = cod
        this.valor = valor
    }

    public get getCod(){
        return this.cod;
    }

    public get getValor(){
        return this.valor
    }
    public setValor(valor:number){
        this.valor = valor
    }
}