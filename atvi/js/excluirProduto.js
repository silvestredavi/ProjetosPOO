"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("./entrada"));
const excluir_1 = __importDefault(require("./excluir"));
let executa = true;
class ExcluirProduto extends excluir_1.default {
    constructor(produtos) {
        super();
        this.produtos = produtos;
        this.entrada = new entrada_1.default();
    }
    Excluir() {
        var _a;
        var produto = this.entrada.receberTexto("Informe o código do produto que deseja excluir: ");
        var index = this.produtos.findIndex(i => i.getCod === produto);
        console.log(`Produto ` + ((_a = this.produtos.find(i => i.getCod === produto)) === null || _a === void 0 ? void 0 : _a.nome));
        console.log(`Realmente deseja excluir este produto?`);
        var resp = this.entrada.receberNumero(`1 - Excluir, 2 - Cancelar\n`);
        if (resp == 1) {
            this.produtos.splice(index, 1);
            console.log(`Produto excluído com sucesso!`);
            console.log(`----------------------------------------`);
        }
        else {
            console.log(`Operação cancelada!`);
        }
    }
}
exports.default = ExcluirProduto;
