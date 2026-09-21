import fs from "fs";

const caminhoArquivo = "../livros.json";

export function carregarLivros() {
    try {
        const dados = fs.readFileSync(caminhoArquivo, "utf-8");

        return JSON.parse(dados);
    } catch (erro) {
        return [];
    }
}

export function salvarLivros(livros) {
    fs.writeFileSync(
        caminhoArquivo,
        JSON.stringify(livros, null, 2)
    );
}

export function adicionarLivro(novoLivro) {
    const livros = carregarLivros();

    livros.push(novoLivro);

    salvarLivros(livros);
}

export function alterarStatus(indice) {
    const livros = carregarLivros();

    if (indice >= 0 && indice < livros.length) {
        if (livros[indice].status === "Lendo") {
            livros[indice].status = "Lido";
        } else {
            livros[indice].status = "Lendo";
        }

        salvarLivros(livros);
    }
}

export function removerLivro(indice) {
    const livros = carregarLivros();

    if (indice >= 0 && indice < livros.length) {
        livros.splice(indice, 1);

        salvarLivros(livros);
    }
}