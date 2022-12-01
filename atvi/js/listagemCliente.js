"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
class ListagemCliente extends listagem_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
    }
    listar() {
        console.log(`\nLista de clientes:`);
        if (this.clientes.length > 0) {
            this.clientes.forEach(cliente => {
                console.log(`Nome: ` + cliente.nome);
                console.log(`Nome social: ` + cliente.nomeSocial);
                console.log(`Gênero: ` + cliente.genero);
                console.log(`RGs:`);
                cliente.getRgs.forEach(rg => {
                    console.log(`Nº ` + rg.getNumero + ` - Data de Emissão: ` + rg.getDataEmissao.toLocaleDateString());
                });
                console.log(`Telefones:`);
                cliente.getTelefones.forEach(tel => {
                    console.log(`(` + tel.getDdd + `) ` + tel.getNumero);
                });
                console.log(`--------------------------------------`);
            });
        }
        else {
            console.log(`\nNão há clientes cadastrados!`);
        }
        console.log(`\n`);
    }
}
exports.default = ListagemCliente;
