import { Component } from "react";
import "../estilo/formulario.css";

type props = {
    tema: string
}

export default class FormularioCadastroCliente extends Component<props> {
    
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="complete_name" type="text" className="validate" />
                                <label htmlFor="complete_name">Nome Completo</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="social_name" type="text" className="validate" />
                                <label htmlFor="social_name">Nome Social</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="CPF" type="text" className="validate" />
                                <label htmlFor="CPF">CPF</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="emissao_cpf" type="text" className="validate" />
                                <label htmlFor="emissao_cpf">Data de Emissão do CPF</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="RG" type="text" className="validate" />
                                <label htmlFor="RG">RG</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="telefone" type="text" className="validate" />
                                <label htmlFor="telefone">Telefone</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="email" type="email" className="validate" />
                                <label htmlFor="email">E-mail</label>
                            </div>
                        </div>
                        </form>
                        <div className="container">
                                <button className={estiloBotao} type="submit" name="action">Cadastrar Cliente
                                    <i className="material-icons right">send</i>
                                </button>
                                <button className={estiloBotao} type="submit" name="action">Atualizar Dados
                                    <i className="material-icons right">edit</i>
                                </button>
                                <button className={estiloBotao} type="submit" name="action">Excluir Cliente
                                    <i className="material-icons right">delete</i>
                                </button>
                            </div>
                        </div>
        )
    }
}