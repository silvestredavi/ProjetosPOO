import { Component } from "react";
import "../estilo/formulario.css";

type props = {
    tema: string
}

export default class FormularioCadastroProduto extends Component<props> {
    
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="nome_produto" type="text" className="validate" />
                                <label htmlFor="nome_produto">Nome do Produto</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="preco_produto" type="text" className="validate" />
                                <label htmlFor="preco_produto">Preço</label>
                            </div>
                        </div>
                    </form>
                        <div className="container">
                                <button className={estiloBotao} type="submit" name="action">Cadastrar Produto
                                    <i className="material-icons right">send</i>
                                </button>
                                <button className={estiloBotao} type="submit" name="action">Atualizar Dados
                                    <i className="material-icons right">edit</i>
                                </button>
                                <button className={estiloBotao} type="submit" name="action">Excluir Produto
                                    <i className="material-icons right">delete</i>
                                </button>
                            </div>
                        </div>
           
        )
    }
}