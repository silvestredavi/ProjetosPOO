"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cadastro_1 = __importDefault(require("./cadastro"));
const entrada_1 = __importDefault(require("./entrada"));
const servico_1 = __importDefault(require("./servico"));
class CadastroServico extends cadastro_1.default {
    constructor(servicos) {
        super();
        this.servicos = servicos;
        this.entrada = new entrada_1.default();
    }
    cadastrar() {
        console.log(`\nInício do cadastro do serviço`);
        var cod = this.geraStringAleatoria(5);
        var nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `);
        var preco = this.entrada.receberNumero(`Digite o valor do serviço R$: `);
        console.log(`O código gerado para este serviço é: ` + cod);
        let servico = new servico_1.default(cod, nome, preco);
        this.servicos.push(servico);
        console.log(`\nCadastro concluído :)\n`);
    }
}
exports.default = CadastroServico;
