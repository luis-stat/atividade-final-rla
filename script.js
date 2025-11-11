var quantAlunos = parseInt(prompt("Informe a quantidade de alunos: "))

var notasAv1 = [];
var notasAv2 = [];
var medias = [];
var situacoes = [];

var aprovados = 0;
var reprovados = 0;

for (i = 0; i < quantAlunos; i++) {
    var notaAv1 = parseFloat(prompt("Informe a nota da 1a avaliação do "+ (i + 1) +"o aluno: "));
    var notaAv2 = parseFloat(prompt("Informe a nota da 2a avaliação do "+ (i + 1) +"o aluno: "));

    notasAv1.push(notaAv1);
    notasAv2.push(notaAv2);

    var media = ((notaAv1 + notaAv2) / 2);
    medias.push(media);
}