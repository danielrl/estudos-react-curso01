import React, { Component } from "react";
import "./estilo.css";

class CardNota extends Component {
    render() {
        return (
            <section className="card-nota">
                <header>
                    <h3>Informe o título</h3>
                </header>
                <p>Informe sua nota</p>
            </section>
        );
    }
}

export default CardNota;