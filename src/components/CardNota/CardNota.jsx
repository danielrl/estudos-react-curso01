import React, { Component } from "react";
import "./estilo.css";
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg";

class CardNota extends Component {

  excluirNota() {
    let indice = this.props.indice;
    this.props.excluirNota(indice);
  }

  render() {
    return (
      <section className="card-nota">
        <h2>{this.props.categoria}</h2>
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteSVG onClick={this.excluirNota.bind(this)} />
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
