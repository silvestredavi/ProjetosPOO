"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cadastro_1 = __importDefault(require("./cadastro"));
const cliente_1 = __importDefault(require("./cliente"));
const cpf_1 = __importDefault(require("./cpf"));
const entrada_1 = __importDefault(require("./entrada"));
const rg_1 = __importDefault(require("./rg"));
const telefone_1 = __importDefault(require("./telefone"));
class CadastroCliente extends cadastro_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    cadastrar() {
        console.log(`\nInício do cadastro do cliente`);
        var nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `);
        var nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `);
        var genero = this.entrada.receberTexto(`Por favor informe o gênero do cliente: `);
        var valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        var data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf (dd/mm/yyyy): `);
        var partesData = data.split('/');
        var ano = new Number(partesData[2].valueOf()).valueOf();
        var mes = new Number(partesData[1].valueOf()).valueOf();
        var dia = new Number(partesData[0].valueOf()).valueOf();
        var dataEmissao = new Date(ano, mes, dia);
        var CPF = new cpf_1.default(valor, dataEmissao);
        let plusRg = true;
        let rgs = [];
        while (plusRg) {
            let rg = this.entrada.receberTexto(`Insira o número do RG: `);
            let dataRg = this.entrada.receberTexto(`Insira a data de emissão do RG: `);
            var partesData = dataRg.split('/');
            var ano = new Number(partesData[2].valueOf()).valueOf();
            var mes = new Number(partesData[1].valueOf()).valueOf();
            var dia = new Number(partesData[0].valueOf()).valueOf();
            var dataEmissao = new Date(ano, mes, dia);
            var novoRg = new rg_1.default(rg, dataEmissao);
            rgs.push(novoRg);
            console.log(`RG salvo!`);
            var opcao = this.entrada.receberNumero(`Digite 1 para adicionar outro RG ou 0 para seguir com o cadastro: `);
            if (opcao != 1) {
                plusRg = false;
            }
        }
        let plusTel = true;
        let tels = [];
        while (plusTel) {
            let ddd = this.entrada.receberTexto(`Insira o DDD do telefone: `);
            let num = this.entrada.receberTexto(`Insira o número do telefone: `);
            var novoTel = new telefone_1.default(ddd, num);
            tels.push(novoTel);
            console.log(`Telefone cadastrado com sucesso!\n`);
            var opcao = this.entrada.receberNumero(`Digite 1 para adicionar outro telefone ou 0 para seguir com o cadastro: `);
            if (opcao != 1) {
                plusTel = false;
            }
        }
        let cliente = new cliente_1.default(nome, nomeSocial, genero, CPF, rgs, tels);
        this.clientes.push(cliente);
        console.log(`\nCadastro finalizado :)\n`);
    }
}
exports.default = CadastroCliente;
