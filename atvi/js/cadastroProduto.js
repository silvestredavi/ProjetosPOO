"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cadastro_1 = __importDefault(require("./cadastro"));
const produto_1 = __importDefault(require("./produto"));
const entrada_1 = __importDefault(require("./entrada"));
class CadastroProduto extends cadastro_1.default {
    constructor(produtos) {
        super();
        this.produtos = produtos;
        this.entrada = new entrada_1.default();
    }
    cadastrar() {
        console.log(`\nInício do cadastro do produto`);
        var cod = this.geraStringAleatoria(5);
        var nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
        var preco = this.entrada.receberTexto(`Digite o valor do produto: `);
        var precoFormat = preco.replace(" ", "").replace("R", "").replace("$", "").replace(".", "").replace(",", ".");
        console.log(`O código gerado para esse produto é: ` + cod);
        let produto = new produto_1.default(cod, nome, parseInt(precoFormat));
        this.produtos.push(produto);
        console.log(`\nCadastro concluído :)\n`);
    }
}
exports.default = CadastroProduto;
