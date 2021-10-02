import React, { Component } from "react";

class FormularioCadastro extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Informe o título" />
                <textarea placeholder="Informe sua nota" />
                <button>Criar Nota</button>
            </form>
        );
    }
}

export default FormularioCadastro;