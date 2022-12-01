import { Component } from "react";
import "../estilo/formulario.css";
import { render } from 'react-dom';

type props = {
    tema: string
}

export default class FormularioCadastroServico extends Component<props> {
    
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="nome_servico" type="text" className="validate" />
                                <label htmlFor="nome_servico">Nome do Serviço</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="preco_servico" type="text" className="validate" />
                                <label htmlFor="preco_servico">Preço</label>
                            </div>
                        </div>
                    </form>
                    <div className="container">
                            <button className={estiloBotao} type="submit" name="action">Cadastrar Serviço
                                <i className="material-icons right">send</i>
                            </button>
                            <button className={estiloBotao} type="submit" name="action">Atualizar Dados
                                <i className="material-icons right">edit</i>
                            </button>
                            <button className={estiloBotao} type="submit" name="action">Excluir Serviço
                                <i className="material-icons right">delete</i>
                            </button>
                    </div>
                </div>
           
            )
    }
}