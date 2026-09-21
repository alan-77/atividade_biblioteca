import {
    carregarLivros,
    adicionarLivro,
    alterarStatus as alterarStatusModel,
    removerLivro
} from "../models/livroModel.js";

export function listar(req, res) {
    const livros = carregarLivros();

    res.render("principal", {
        livros
    });
}

export function formNovo(req, res) {
    res.render("novoLivro");
}

export function criar(req, res) {
    const {
        titulo,
        autor,
        paginas
    } = req.body;

    const novoLivro = {
        titulo,
        autor,
        paginas: Number(paginas),
        status: "Lendo"
    };

    adicionarLivro(novoLivro);

    res.redirect("/livros");
}

export function alterarStatus(req, res) {
    const indice = Number(req.params.indice);

    alterarStatusModel(indice);

    res.redirect("/livros");
}

export function remover(req, res) {
    const indice = Number(req.params.indice);

    removerLivro(indice);

    res.redirect("/livros");
}