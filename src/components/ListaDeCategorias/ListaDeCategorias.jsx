import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {

    constructor() {
        super();
        this.state = { categorias: [] }
        this._referenciaNovasCategorias = this._novasCategorias.bind(this);
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._referenciaNovasCategorias);
    }

    componentWillUnmount() {
        this.props.categorias.desinscrever(this._referenciaNovasCategorias);
    }

    _novasCategorias(categorias) {
        this.setState({ ...this.state, categorias });
    }

    _handleEventoInput(e) {
        if (e.key === "Enter") {
            let nomeCategoria = e.target.value;
            this.props.adicionarCategoria(nomeCategoria);
        }
    }

    render() {
        return (
            <section>
                <ul className="lista-categorias_lista">
                    {this.state.categorias.map((categoria, index) => {
                        return <li key={index} className="lista-categorias_item">{categoria}</li>;
                    })}
                </ul>
                <input type="text" onKeyUp={this._handleEventoInput.bind(this)} placeholder="Adicionar Categoria" className="lista-categorias_input" />
            </section>
        );
    }
}

export default ListaDeCategorias;