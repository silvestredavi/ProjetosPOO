/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import "../estilo/estilo.css";


type props = {
    tema: string
}

export default class ListaCliente extends Component<props> {
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <>
                <table className="highlight responsive-table centered">
                    <thead>
                        <tr>
                            <th>Cliente</th>
                            <th>Gênero</th>
                            <th>Produtos Comprados</th>
                            <th>Serviços Contratados</th>
                            <th>Detalhes</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Ana Clara Vieira</td>
                            <td>Feminino</td>
                            <td>15</td>
                            <td>4</td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>Bernardo Fernandes</td>
                            <td>Masculino</td>
                            <td>5</td>
                            <td>1</td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>Cibele de Assis</td>
                            <td>Feminino</td>
                            <td>2</td>
                            <td>6</td>
                            <td>
                            </td>
                        </tr>
                    </tbody>
        </table>
        </>
        )
    }
}