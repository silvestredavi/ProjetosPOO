"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
class ListagemServicos extends listagem_1.default {
    constructor(servicos) {
        super();
        this.servicos = servicos;
    }
    listar() {
        console.log(`\nLista dos serviços:`);
        if (this.servicos.length > 0) {
            this.servicos.forEach(serv => {
                console.log("Código: " + serv.getCod + " - " + serv.nome + "\nPreço: " + serv.getValor);
                console.log(`--------------------------------------`);
            });
        }
        else {
            console.log(`\nNão há serviços cadastrados!`);
        }
        console.log(`\n`);
    }
}
exports.default = ListagemServicos;
