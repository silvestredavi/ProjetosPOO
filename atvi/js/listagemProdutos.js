"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
class ListagemProdutos extends listagem_1.default {
    constructor(produtos) {
        super();
        this.produtos = produtos;
    }
    listar() {
        console.log(`\nLista de produtos:`);
        if (this.produtos.length > 0) {
            this.produtos.forEach(prod => {
                console.log(`Código ` + prod.getCod + ` - ` + prod.nome + `\nValor: R$` + this.formatter.format(prod.getValor));
                console.log(`--------------------------------------`);
            });
        }
        else {
            console.log(`\nNão há produtos cadastrados`);
        }
        console.log(`\n`);
    }
}
exports.default = ListagemProdutos;
