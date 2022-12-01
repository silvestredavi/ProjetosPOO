"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rg {
    constructor(numero, dataEmissao) {
        this.numero = numero;
        this.dataEmissao = dataEmissao;
    }
    get getNumero() {
        return this.numero;
    }
    get getDataEmissao() {
        return this.dataEmissao;
    }
    setNum(numero) {
        return this.numero = numero;
    }
    setDataEmissao(dataEmissao) {
        this.dataEmissao = dataEmissao;
    }
}
exports.default = Rg;
