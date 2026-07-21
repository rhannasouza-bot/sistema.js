const prompt = require('prompt-sync')();

let alunos = [
    { nome: "Ana", notas: [8, 7, 9] },
    { nome: "Rhanna", notas: [9, 6, 4] },
    { nome: "João", notas: [9, 10, 7 ] },



];

function buscarAluno(nome) {
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].nome.toLowerCase() === nome.toLowerCase()) {
            return alunos[i];
        }
    }

    return undefined;
}


console.log(buscarAluno("Luan"));

function calcularMedia(aluno) {
    if (aluno.notas.length === 0) {
        return 0;
    }

    let soma = 0;

    for (let i = 0; i < aluno.notas.length; i++) {
        soma += aluno.notas[i];
    }

    return soma / aluno.notas.length;
}

console.log(buscarAluno("Ana"));

let aluno = buscarAluno("Ana");
let media = calcularMedia(aluno);





function situacao(media) {
    if (media >= 6) {
        return "APROVADO";
    } else if (media >= 4) {
        return "RECUPERACAO";
    } else {
        return "REPROVADO";
    }
}


console.log(media);
console.log(situacao(media));




function cadastrarAluno() {
    let nome = prompt("Digite o nome do aluno:");

    let aluno = buscarAluno(nome);

    if (aluno) {
        console.log("Aluno já cadastrado!");
        return;
    }

    alunos.push({
        nome: nome,
        notas: []
    });

    console.log("Aluno cadastrado com sucesso!");
}


function listarAlunos() {
    if (alunos.length === 0) {
        console.log("Nenhum aluno cadastrado");
        return;
    }

    let texto = "Alunos cadastrados:\n";

    for (let i = 0; i < alunos.length; i++) {
        texto += alunos[i].nome + "\n";
    }

    console.log(texto);
}


function removerAluno() {
    let nome = prompt("Digite o nome do aluno que deseja remover:");

    let aluno = buscarAluno(nome);

    if (!aluno) {
        console.log("Aluno não encontrado!");
        return;
    }

    let posicao = alunos.indexOf(aluno);
    alunos.splice(posicao, 1);

    console.log("Aluno removido com sucesso!");
}


cadastrarAluno();






function lancarNota() {
    let nome = prompt("Digite o nome do aluno: ");

    let aluno = buscarAluno(nome);

    if (!aluno) {
        console.log("Aluno não encontrado!");
        return;
    }

    let nota = Number(prompt("Digite a nota: "));

    if (nota < 0 || nota > 10) {
        console.log("Nota inválida!");
        return;
    }

    aluno.notas.push(nota);

    console.log("Nota lançada com sucesso!");
}

function verBoletim() {
    let nome = prompt("Digite o nome do aluno: ");

    let aluno = buscarAluno(nome);

    if (!aluno) {
        console.log("Aluno não encontrado!");
        return;
    }

    let media = calcularMedia(aluno);
    let status = situacao(media);

    console.log("\n===== BOLETIM =====");
    console.log("Nome: " + aluno.nome);
    console.log("Notas: " + aluno.notas.join(", "));
    console.log("Média: " + media.toFixed(2));
    console.log("Situação: " + status);
}

listarAlunos();

lancarNota();

verBoletim();