import Entrada from "./entrada";
import Empresa from "./empresa";
import CadastroCliente from "./cadastroCliente";
import ListagemClientes from "./listagemCliente";
import ListagemProdutos from "./listagemProdutos";
import ListagemServicos from "./listagemServicos";
import CadastroProduto from "./cadastroProduto";
import CadastroServico from "./cadastroServico";
import ExcluirCliente from "./excluirCliente";
import Excluir from "./excluir";
import ExcluirProduto from "./excluirProduto";
import ExcluirServico from "./excluirServico";
import AtualizarCliente from "./atualizarCliente";
import Cliente from "./cliente";
import cpf from "./cpf";
import Rg from "./rg";
import Telefone from "./telefone";
import Servico from "./servico";
import Produto from "./produto";
import MaiorConsumo from "./consumoMaior";
import GeneroCliente from "./clienteGenero";
import GeneroConsumo from "./consumoGenero";
import MenorConsumo from "./consumoMenor";
import servicosProdutosConsumidos from "./servicosProdutos+Consumidos";
import ConsumoValor from "./ConsumoValor";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true


let c1 = new Cliente('Davi', 'Davis', 'M', new cpf('45625136200', new Date()),[new Rg('556215258', new Date()),new Rg('391562853', new Date())], [new Telefone('12', '98568548'), new Telefone('23', '8546925658')])
let c2 = new Cliente('César Juan da Cunha', 'Cesinha', 'M', new cpf('08372057001', new Date()),[new Rg('14738057-1', new Date()),new Rg('53362152-1', new Date())], [new Telefone('92', '37468463'), new Telefone('92', '984247021')])
let c3 = new Cliente('Gustavo Rafael Paulo Alves', 'Gu', 'M', new cpf('64625557771', new Date()),[new Rg('44356135-7', new Date()),new Rg('84563254-1', new Date())], [new Telefone('83', '38094238'), new Telefone('83', '984413840')])
let c4 = new Cliente('Antônia Brenda Dias', 'Toninha', 'F', new cpf('21109039530', new Date()),[new Rg('21816333-2', new Date()),new Rg('35454097-1', new Date())], [new Telefone('82', '37769735'), new Telefone('82', '996393726')])
let c5 = new Cliente('Larissa Emanuelly Ramos', 'Lala', 'F', new cpf('796514966-49', new Date()),[new Rg('32703638-2', new Date()),new Rg('45896325-5', new Date())], [new Telefone('11', '26001416'), new Telefone('11', '983520073')])
let c6 = new Cliente('Ian Osvaldo Viana', 'Ian', 'M', new cpf('165831536-70', new Date()),[new Rg('25033142-1', new Date()),new Rg('25033142-8', new Date())], [new Telefone('71', '36056107'), new Telefone('71', '987040118')])
let c7 = new Cliente('Geraldo Levi Vitor Cavalcanti', 'Ge', 'M', new cpf('414484552-43', new Date()),[new Rg('42877132-4', new Date()),new Rg('42877132-8', new Date())], [new Telefone('65', '992084505'), new Telefone('45', '81507421')])
let c8 = new Cliente('Renan André Duarte', 'Renan', 'F', new cpf('610219816-64', new Date()),[new RG('124419082-5', new Date())], [new Telefone('85', '785404758')])
let c9 = new Cliente('Gerson', 'Penha', 'M', new CPF('78944778-53', new Date()),[new RG('894419082-5', new Date())], [new Telefone('95', '987404758')])
let c10 = new Cliente('Diego', 'Dieguinho', 'M', new CPF('987584778-53', new Date()),[new RG('48919082-3', new Date()),new RG('39154097-1', new Date())], [new Telefone('12', '981504758'), new Telefone('45', '81507421')])
let c11 = new Cliente('Larissa', 'Lari', 'F', new CPF('487544778-78', new Date()),[new RG('78919082-7', new Date()),new RG('25154097-x', new Date())], [new Telefone('23', '997504758'), new Telefone('41', '971507421')])
let c12 = new Cliente('Stephanie', 'Stefy', 'F', new CPF('234544778-86', new Date()),[new RG('12319082-7', new Date()),new RG('78954097-x', new Date())], [new Telefone('15', '997504758'), new Telefone('89', '971507421')])
let c13 = new Cliente('Alessandra', 'Sandra', 'F', new CPF('123444778-78', new Date()),[new RG('12469082-8', new Date()),new RG('78954097-x', new Date())], [new Telefone('87', '997504758'), new Telefone('12', '971507421')])
let c14 = new Cliente('Joyce', 'Jojo', 'F', new CPF('586444778-25', new Date()),[new RG('4559082-8', new Date()),new RG('98554097-x', new Date())], [new Telefone('25', '997504758'), new Telefone('12', '9469529541')])
let c15 = new Cliente('João', 'Jota', 'M', new CPF('5864448478-98', new Date()),[new RG('458415582-3', new Date()),new RG('98554097-7', new Date())], [new Telefone('11', '517504758'), new Telefone('45', '469529541')])
let c16 = new Cliente('Gabriel', 'Biel', 'M', new CPF('7864448478-84', new Date()),[new RG('988415582-3', new Date()),new RG('98554097-1', new Date())], [new Telefone('11', '98704758'), new Telefone('12', '999529541')])
let c17 = new Cliente('Rafael', 'Fael', 'M', new CPF('3544448478-13', new Date()),[new RG('124415582-7', new Date()),new RG('78554097-7', new Date())], [new Telefone('14', '517504758'), new Telefone('17', '469529541')])
let c18 = new Cliente('Eduardo', 'Dudu', 'M', new CPF('1744448478-53', new Date()),[new RG('78515582-4', new Date()),new RG('968754097-5', new Date())], [new Telefone('12', '987504758'), new Telefone('12', '99952954')])
let c19 = new Cliente('Sabrina', 'Cristina', 'F', new CPF('3674448478-26', new Date()),[new RG('971415582-x', new Date()),new RG('36554097-9', new Date())], [new Telefone('11', '987504758'), new Telefone('14', '364529541')])
let c20 = new Cliente('Thales', 'Kerber', 'M', new CPF('7894448478-07', new Date()),[new RG('458415582-7', new Date()),new RG('36554097-2', new Date())], [new Telefone('21', '417504758'), new Telefone('17', '214529541')])
let c21 = new Cliente('Vitoria', 'Vivi', 'F', new CPF('147448478-69', new Date()),[new RG('378415582-8', new Date()),new RG('985543647-2', new Date())], [new Telefone('11', '987504758'), new Telefone('12', '889529541')])
let c22 = new Cliente('Tulio', 'Castro', 'M', new CPF('3894448478-24', new Date()),[new RG('988415582-5', new Date()),new RG('358554097-7', new Date())], [new Telefone('68', '3477504758'), new Telefone('24', '478952955')])
let c23 = new Cliente('Gustavo', 'Gu', 'M', new CPF('2364448478-25', new Date()),[new RG('123415582-4', new Date()),new RG('985540958-9', new Date())], [new Telefone('12', '687504758'), new Telefone('12', '9695295417')])
let c24 = new Cliente('Rafaela', 'Castro', 'F', new CPF('1464448478-20', new Date()),[new RG('878415582-x', new Date()),new RG('258554097-6', new Date())], [new Telefone('86', '789504758'), new Telefone('17', '99752954')])
let c25 = new Cliente('Artur', 'Tutu', 'M', new CPF('967444847-14', new Date()),[new RG('614415582-4', new Date()),new RG('563525555-4', new Date())], [new Telefone('12', '877504758'), new Telefone('', '9969529541')])
let c26 = new Cliente('Messias', 'Vitorino', 'M', new CPF('8464448478-36', new Date()),[new RG('4178415582-9', new Date()),new RG('4145568585-4', new Date())], [new Telefone('25', '565458744'), new Telefone('45', '3545747474')])
let c27 = new Cliente('Amanda', 'Dioly', 'F', new CPF('5864448789-41', new Date()),[new RG('357155821-7', new Date()),new RG('9888885877-9', new Date())], [new Telefone('12', '354155774'), new Telefone('36', '854456452')])
let c28 = new Cliente('Helena', 'Ravaglia', 'F', new CPF('5244448478-68', new Date()),[new RG('4387415582-8', new Date()),new RG('565889877-2', new Date())], [new Telefone('16', '88684858'), new Telefone('47', '558857474')])
let c29 = new Cliente('Giovanna', 'Liparelli', 'F', new CPF('123587787-15', new Date()),[new RG('369415582-1', new Date()),new RG('357774447-3', new Date())], [new Telefone('13', '898744554'), new Telefone('11', '858554577')])
let c30 = new Cliente('Rafaela', 'Queiroz', 'F', new CPF('2565455454-58', new Date()),[new RG('4575554474-7', new Date()),new RG('985540597-1', new Date())], [new Telefone('22', '6952214254'), new Telefone('12', '58747555')])

let s1 = new Servico('URCNS','Unha',15);
let s2 = new Servico('KAMDD','Limpeza',50);
let s3 = new Servico('SFJID','Sobrancelha',60);
let s4 = new Servico('DSERG','Corte',20);
let s5 = new Servico('WEERF','Maquiagem',70);
let s6 = new Servico('TFRJE','Pedicure',40);
let s7 = new Servico('RTUTE','Botox',80);
let s8 = new Servico('WEHIW','Preenchimento',45);
let s9 = new Servico('RYIUJ','Cílios',60);
let s10 = new Servico('EHJFH','Depilação',25);

let p1 = new Produto('YJHDS','Xampu',20);
let p2 = new Produto('RTEYU','Esmalte',15);
let p3 = new Produto('RYTU7','Camisa',30);
let p4 = new Produto('YTJUR','Cera',35);
let p5 = new Produto('IKYTT','Rímel',80);
let p6 = new Produto('EWMKR','Secador',200);
let p7 = new Produto('WHUWF','Demaquilante',60);
let p8 = new Produto('REWOD','Acetona',40);
let p9 = new Produto('IEKFE','Batom',25);
let p10 = new Produto('DFJGI','Pente',10);

c1.addProduto(p1)
c1.addProduto(p1)
c1.addProduto(p2)
c1.addProduto(p9)
c1.addServicos(s6);
c1.addServicos(s10)
c1.addServicos(s3)

c2.addProduto(p3)
c2.addProduto(p4)
c2.addProduto(p10)
c2.addProduto(p5)
c2.addServicos(s1)
c2.addServicos(s2)

c3.addProduto(p6)
c3.addProduto(p7)
c3.addProduto(p8)
c3.addProduto(p8)
c3.addServicos(s1)
c3.addServicos(s5)
c3.addServicos(s5)

c5.addProduto(p5)
c5.addProduto(p8)
c5.addProduto(p10)
c5.addServicos(s1)
c5.addServicos(s10)
c5.addServicos(s2)

c10.addServicos(s10)
c10.addServicos(s3)
c10.addProduto(p2)

c29.addProduto(p1)
c29.addProduto(p7)
c29.addProduto(p8)
c29.addServicos(s5)

empresa.getClientes.push(c1);
empresa.getClientes.push(c2);
empresa.getClientes.push(c3);
empresa.getClientes.push(c4);
empresa.getClientes.push(c5);
empresa.getClientes.push(c6);
empresa.getClientes.push(c7);
empresa.getClientes.push(c8);
empresa.getClientes.push(c9);
empresa.getClientes.push(c10);
empresa.getClientes.push(c11);
empresa.getClientes.push(c12);
empresa.getClientes.push(c13);
empresa.getClientes.push(c14);
empresa.getClientes.push(c15);
empresa.getClientes.push(c16);
empresa.getClientes.push(c17);
empresa.getClientes.push(c18);
empresa.getClientes.push(c19);
empresa.getClientes.push(c20);
empresa.getClientes.push(c21);
empresa.getClientes.push(c22);
empresa.getClientes.push(c23);
empresa.getClientes.push(c24);
empresa.getClientes.push(c25);
empresa.getClientes.push(c26);
empresa.getClientes.push(c27);
empresa.getClientes.push(c28);
empresa.getClientes.push(c29);
empresa.getClientes.push(c30);


empresa.getServicos.push(s1);
empresa.getServicos.push(s2);
empresa.getServicos.push(s3);
empresa.getServicos.push(s4);
empresa.getServicos.push(s5);
empresa.getServicos.push(s6);
empresa.getServicos.push(s7);
empresa.getServicos.push(s8);
empresa.getServicos.push(s9);
empresa.getServicos.push(s10);

empresa.getProdutos.push(p1);
empresa.getProdutos.push(p2);
empresa.getProdutos.push(p3);
empresa.getProdutos.push(p4);
empresa.getProdutos.push(p5);
empresa.getProdutos.push(p6);
empresa.getProdutos.push(p7);
empresa.getProdutos.push(p8);
empresa.getProdutos.push(p9);
empresa.getProdutos.push(p10);









while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cliente`);
    console.log(`2 - Produto`);
    console.log(`3 - Serviço`);
    console.log(`4 - Listagem`);
    
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            console.log(`1 - Cadastrar cliente`);
            console.log(`2 - Listar Clientes`);
            console.log(`3 - Excluir cliente`);
            console.log(`4 - Atualizar cadastro de cliente`);
            console.log(`0 - Sair`);
            let entradaCliente = new Entrada()
            let opcaoCliente = entradaCliente.receberNumero(`Por favor, escolha uma opção: `)
            switch(opcaoCliente){
                case 1: 
                    let cadastro = new CadastroCliente(empresa.getClientes)
                    cadastro.cadastrar()
                    break;
                case 2:
                    let listagem = new ListagemClientes(empresa.getClientes)
                    listagem.listar()
                    break;
                case 3:
                    let exclusao = new ExcluirCliente (empresa.getClientes)
                    exclusao.Excluir()
                    break;
                case 4:
                    let atualizarCliente = new AtualizarCliente(empresa.getClientes)
                    atualizarCliente.Atualizar()
                    break;
                case 0:
                    console.log(`Até mais!`)
                    break;
            }
            break;
        case 2:
            console.log(`1 - Cadastrar produto`);
            console.log(`2 - Listar todos os produtos`);
            console.log(`3 - Excluir produto`);
            console.log(`0 - Sair`);
            let entradaProduto = new Entrada()
            let opcaoProduto = entradaProduto.receberNumero(`Por favor, escolha uma opção: `)
            switch(opcaoProduto){
                case 1: 
                    let cadastroProduto = new CadastroProduto(empresa.getProdutos)
                    cadastroProduto.cadastrar()
                    break;
                case 2:
                    let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
                    listagemProdutos.listar()
                    break;
                case 3:
                    let exclusaoProduto = new ExcluirProduto(empresa.getProdutos)
                    exclusaoProduto.Excluir()
                    break;
                case 0:
                    console.log(`Até mais!`)
                    break;
            }
            break;
        case 3:
            console.log(`1 - Cadastrar servico`);
            console.log(`2 - Listar Serviços`);
            console.log(`3 - Excluir serviço`);
            console.log(`0 - Sair`);
            let entradaServico = new Entrada()
            let opcaoServico = entradaServico.receberNumero(`Por favor, escolha uma opção: `)
            switch(opcaoServico){
                case 1: 
                    let cadastroServico = new CadastroServico(empresa.getServicos)
                    cadastroServico.cadastrar()
                    break;
                case 2:
                    let listagemServicos = new ListagemServicos(empresa.getServicos)
                    listagemServicos.listar()
                    break;
                case 3:
                    let exclusaoServico = new ExcluirServico(empresa.getServicos)
                    exclusaoServico.Excluir()
                    break;
                case 0:
                    console.log(`Até mais!`)
                    break;
            }
            break;
        case 4:
            console.log("Listagem: \n");
            if(empresa.getClientes.length)
              console.log("1 - 10 clientes que mais consumiram produtos ou serviços, em quantidade\n");   
              console.log("2 - Listagem clientes por gênero.\n");
            if(empresa.getServicos.length || empresa.getProdutos.length)
              console.log("3 - Listagem serviços ou produtos mais consumidos\n");
            if(empresa.getServicos.length || empresa.getProdutos.length)
              console.log("4 - Listagem serviços ou produtos mais consumidos por gênero\n");
            if(empresa.getServicos.length || empresa.getProdutos.length)
            console.log("5 - Listagem 10 clientes que menos consumiram produtos ou serviços\n");
            console.log("6 - Listagem dos 5 clientes que mais consumiram em valor, não em quantidade\n");
            console.log("0 - Voltar Para o Menu Principal\n");

            let entrada = new Entrada()
            let opcao = entrada.receberNumero("Escolha uma opção: ")

            switch (opcao) {
              case 1:
                let consumoMaior = new MaiorConsumo(empresa)
                consumoMaior.listar()
                break;

              case 2:
                let generoCliente = new GeneroCliente(empresa.getClientes)
                generoCliente.listar()
                break;

              case 3:
                let produtosServicosMaisConsumidos = new servicosProdutosConsumidos(empresa.getClientes)
                produtosServicosMaisConsumidos.listar()
                break;

              case 4:
                let generoConsumo = new GeneroConsumo(empresa.getClientes,empresa.getProdutos, empresa.getServicos)
                
                generoConsumo.listar()
                break;      

              case 5:
                let menorConsumo = new MenorConsumo(empresa)
                menorConsumo.listar()
                break; 

              case 6:
                let valorConsumo = new ConsumoValor(empresa.getClientes)
                  valorConsumo.listar()
                  break;

              case 0:
                console.log(`Até mais!`);
                break;
              default:
                  break;
            }
        break;
        case 0:
            execucao = false
            console.log(`Até mais!`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
    
}
