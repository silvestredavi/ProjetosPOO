"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    constructor(cod, nome, valor) {
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
exports.default = Produto;
