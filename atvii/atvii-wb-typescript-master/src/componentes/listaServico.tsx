/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';


type props = {
    tema: string
}

export default class ListaServico extends Component<props> {
     
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        return (
            <div className="table">
                <table className="highlight responsive-table centered">
                    <thead>
                        <tr>
                            <th>Nome do Serviço</th>
                            <th>Preço</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Corte Feminino</td>
                            <td>R$ 50,00</td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>Corte Masculino</td>
                            <td>R$ 25,00</td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>Hidratação</td>
                            <td>R$ 150,00</td>
                            <td>
                            </td>
                        </tr>
                    </tbody>
        </table>
        </div>
        )
    }
}