"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    constructor(nome, nomeSocial, genero, CPF, rgs, telefones) {
        this.rgs = [];
        this.telefones = [];
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.genero = genero;
        this.CPF = CPF;
        this.rgs = rgs;
        this.dataCadastro = new Date();
        this.telefones = telefones;
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
    }
    get getCpf() {
        return this.CPF;
    }
    set setCpf(cpf) {
        this.CPF = cpf;
    }
    get getRgs() {
        return this.rgs;
    }
    set setRgs(rg) {
        this.rgs = rg;
    }
    get getDataCadastro() {
        return this.dataCadastro;
    }
    get getTelefones() {
        return this.telefones;
    }
    set setTelefone(telefone) {
        this.telefones = this.telefones;
    }
    get getProdutosConsumidos() {
        return this.produtosConsumidos;
    }
    get getServicosConsumidos() {
        return this.servicosConsumidos;
    }
    addServicos(servico) {
        if (!servico) {
            console.log("Este serviço não existe!");
        }
        else {
            this.servicosConsumidos.push(servico);
        }
    }
    addProduto(produto) {
        if (!produto) {
            console.log("Este produto não existe!");
        }
        else {
            this.produtosConsumidos.push(produto);
        }
    }
    addRg(rg) {
        this.rgs.push(rg);
    }
    addTel(telefone) {
        this.telefones.push(telefone);
    }
}
exports.default = Cliente;
