"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const atualizar_1 = __importDefault(require("./atualizar"));
const cpf_1 = __importDefault(require("./cpf"));
const entrada_1 = __importDefault(require("./entrada"));
class AtualizarCliente extends atualizar_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    Atualizar() {
        console.log(`\nAtualização do cliente`);
        let busca = this.entrada.receberTexto(`Por favor informe o CPF do cliente que você deseja alterar: `);
        this.clientes.forEach(cliente => {
            if (cliente.getCpf.getValor == busca) {
                let executa = true;
                while (executa) {
                    console.log(`Cliente encontrado, nome: ${cliente.nome}. Qual campo deseja alterar?`);
                    let confirma = this.entrada.receberNumero(`1 - Nome, 2 - Nome Social, 3 - CPF, 4 - RG, 5 - Telefone,
                        6 - Gênero, 0 - Sair\n`);
                    switch (confirma) {
                        case 1:
                            cliente.nome = this.entrada.receberTexto(`Digite o novo nome: `);
                            console.log(`Nome atualizado com sucesso!`);
                            break;
                        case 2:
                            cliente.nomeSocial = this.entrada.receberTexto(`Digite o novo nome social: `);
                            console.log(`Nome social atualizado com sucesso!`);
                            break;
                        case 3:
                            var novoCpf = this.entrada.receberTexto(`Digite o CPF: `);
                            var novaData = this.entrada.receberTexto(`Digite a data de emissão do CPF (dd/mm/yyyy): `);
                            cliente.setCpf = new cpf_1.default(novoCpf, new Date(novaData));
                            console.log(`CPF atualizado com sucesso!`);
                        case 4:
                            cliente.getRgs.forEach(rg => {
                                var i = 1;
                                console.log(i + `º Opção - ` + rg.getNumero + ` - ` + rg.getDataEmissao);
                                i++;
                            });
                            var opcao = this.entrada.receberNumero(`Escolha o RG que deseja alterar: `);
                            var novoRg = this.entrada.receberTexto(`Digite o RG (somento números): `);
                            var novaData = this.entrada.receberTexto(`Digite a data de emissão do RG (dd/mm/yyyy): `);
                            cliente.getRgs[opcao - 1].setNum(novoRg);
                            cliente.getRgs[opcao - 1].setDataEmissao(new Date(novaData));
                            console.log(`RG atualizado com sucesso!`);
                        case 5:
                            cliente.getTelefones.forEach(tel => {
                                var i = 1;
                                console.log(i + `º Opção - (` + tel.getNumero + `) ` + tel.getNumero);
                                i++;
                            });
                            var opcao = this.entrada.receberNumero(`Escolha o telefone que deseja alterar: `);
                            var ddd = this.entrada.receberTexto(`Qual o DDD do telefone? `);
                            var tel = this.entrada.receberTexto(`E o número?`);
                            cliente.getTelefones[opcao - 1].setDDD(ddd);
                            cliente.getTelefones[opcao - 1].setNum(tel);
                            console.log(`Telefone atualizado com sucesso!`);
                        case 6:
                            cliente.genero = this.entrada.receberTexto(`Digite o gênero do cliente: `);
                            console.log(`Gênero atualizado com sucesso`);
                        case 0:
                            executa = false;
                            console.log(`Obrigado!`);
                        default:
                            console.log("Digite uma opção válida!");
                            break;
                    }
                }
            }
            else {
                console.log(`\n Nenhum cliente encontrado com o nome informado. \n`);
            }
        });
    }
}
exports.default = AtualizarCliente;
