import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import './assets/index.css';
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";

class App extends Component {

  constructor() {
    super();
    /*
    this.state = {
      //notas: [],
      //categorias: []
    };
    */
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  /*
  criarNota(categoria, titulo, texto) {
    const novaNota = { categoria, titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas
    };
    this.setState(novoEstado);
  }
  */

  /*
  deletarNota(indice) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(indice, 1);
    this.setState({ notas: arrayNotas });
  }
  */

  /*
  adicionarCategoria(nomeCategoria) {
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
    const novoEstado = { categorias: novoArrayCategorias };
    this.setState(novoEstado);

  }
  */

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro categorias={this.categorias} criarNota={this.notas.adicionarNota.bind(this.notas)} />
        <main className="conteudo-principal">
          <ListaDeCategorias categorias={this.categorias}
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)} />
          <ListaDeNotas notas={this.notas} excluirNota={this.notas.excluirNota.bind(this.notas)} />
        </main>
      </section>
    );
  }
}

export default App;