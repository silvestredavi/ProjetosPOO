"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("./entrada"));
const excluir_1 = __importDefault(require("./excluir"));
let executa = true;
class ExcluirServico extends excluir_1.default {
    constructor(servicos) {
        super();
        this.servicos = servicos;
        this.entrada = new entrada_1.default();
    }
    Excluir() {
        var _a;
        var serviço = this.entrada.receberTexto("Informe o código do serviço que deseja excluir: ");
        var index = this.servicos.findIndex(i => i.getCod === serviço);
        console.log(`Serviço ` + ((_a = this.servicos.find(i => i.getCod === serviço)) === null || _a === void 0 ? void 0 : _a.nome));
        console.log(`Realmente deseja excluir este produto?`);
        var resp = this.entrada.receberNumero(`1 - Excluir, 2 - Cancelar`);
        if (resp == 1) {
            this.servicos.splice(index, 1);
            console.log(`Serviço excluído com sucesso!`);
            console.log(`----------------------------------------`);
        }
        else {
            console.log(`Operação cancelada!`);
        }
    }
}
exports.default = ExcluirServico;
