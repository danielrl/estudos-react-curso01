import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";
class ListaDeNotas extends Component {

  constructor() {
    super();
    this.state = { notas: [] }
    this._referenciaNovasNotas = this._novasNotas.bind(this);
  }

  componentDidMount() {
    this.props.notas.inscrever(this._referenciaNovasNotas);
  }

  componentWillUnmount() {
    this.props.notas.desinscrever(this._referenciaNovasNotas);
  }

  _novasNotas(notas) {
    this.setState({ ...this.state, notas });
  }

  render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota indice={index} categoria={nota.categoria} titulo={nota.titulo} texto={nota.texto} excluirNota={this.props.excluirNota} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
