export default class Categorias {
    constructor() {
        this._inscritos = [];
        this.categorias = [];
    }

    inscrever(func) {
        this._inscritos.push(func);
    }

    desinscrever(func) {
        this._inscritos = this._inscritos.filter(f => f !== func);
    }

    notificar() {
        this._inscritos.forEach(func => {
            func(this.categorias);
        });
    }

    adicionarCategoria(nomeNovaCategoria) {
        this.categorias.push(nomeNovaCategoria);
        this.notificar();
    }
}