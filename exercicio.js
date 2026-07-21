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

console.log(buscarAluno("Rhanna"));

  buscarAluno("Rhanna");
calcularMedia(aluno);