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

for (j = 0; j < quantAlunos; j++) {
    for (k = 0; k < quantAlunos - 1; k++) {
        if (media[k] > media[k + 1]) {
            var temp = media[k];
            media[k] = media[k + 1];
            media[k + 1] = temp;
        }
    }
}

for (n = 0; n < quantAlunos; n++) {
    if (media [n] > 5) {
        situacoes[n] = "Aprovados";
        aprovados++;
    } else {
        situacoes[n] = "Reprovados";
        reprovados++;
    }
}