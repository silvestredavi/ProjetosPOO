import Cliente from "./cliente"
import Empresa from "./empresa"
import Produto from "./produto"
import Servico from "./servico"
import Listagem from "./listagem"

export default class MaiorConsumo extends Listagem{
    private clientes: Array <Cliente>
    private produtos: Array <Produto>
    private servicos: Array <Servico>
  
    constructor(empresa:Empresa){
      super()
      this.clientes = empresa.getClientes,
      this.produtos = empresa.getProdutos,
      this.servicos = empresa.getServicos
    }
  
    public listar(): void {
             
      let nome
      let cpf 
      let consumo 
      let ordem
      let quantidade_consumida: any[]  = [];
  
      this.clientes.forEach( cliente => {
        nome = cliente.nome;
        cpf = cliente.getCpf.getValor
  
        consumo = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;
  
        quantidade_consumida.push({
          nome: nome,
          cpf: cpf,
          quantidade: consumo,
  
        });
      })
  
      ordem = quantidade_consumida.sort((x, y) => {
        return y.quantidade - x.quantidade;
      })
  
      ordem = ordem.slice(0,10)
  
      console.log("Listagem dos 10 Clientes que mais consumiram produtos ou servicos em quantidade.");
      console.log(`\n---------------------------------------------\n`);
  
      ordem.forEach( cliente => {
        console.log(`Nome : ` + cliente.nome );
        console.log(`CPF: ` + cliente.cpf );
        console.log(`Quantidade de produtos e/ou serviços consumidos:` + cliente.quantidade );
        console.log(`\n---------------------------------------------\n`);
      })
  
    }
  }