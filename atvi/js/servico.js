"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Servico {
    constructor(nome, cod, valor) {
        this.nome = nome;
        this.cod = cod;
        this.valor = valor;
    }
    get getCod() {
        return this.cod;
    }
    get getValor() {
        return this.valor;
    }
    setValor(valor) {
        this.valor = valor;
    }
}
exports.default = Servico;
