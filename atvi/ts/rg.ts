export default class Rg {
    private numero: string
    private dataEmissao: Date
    constructor(numero: string, dataEmissao: Date){
        this.numero = numero
        this.dataEmissao = dataEmissao

    }
    public get getNumero(): string{
        return this.numero
    }
    public get getDataEmissao(): Date{
        return this.dataEmissao
    }
    public setNum(numero: string){
        return this.numero = numero
    }
    public setDataEmissao(dataEmissao: Date){
        this.dataEmissao = dataEmissao
    }

}