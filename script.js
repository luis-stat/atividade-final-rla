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
        if (medias[k] > medias[k + 1]) {
            var temp = medias[k];
            medias[k] = medias[k + 1];
            medias[k + 1] = temp;
        }
    }
}

for (n = 0; n < quantAlunos; n++) {
    if (medias[n] > 5) {
        situacoes[n] = "Aprovado";
        aprovados++;
    } else {
        situacoes[n] = "Reprovado";
        reprovados++;
    }
}

document.write("<h2>Resultados da Turma</h2>");
document.write("<table border='1' cellpadding='5'>");
document.write("<tr><th>Aluno</th><th>Média</th><th>Situação</th></tr>");

for (var i = 0; i < quantAlunos; i++) {
    document.write("<tr><td>" + (i + 1) + "</td><td>" + medias[i].toFixed(2) + "</td><td>" + situacoes[i] + "</td></tr>");
}

document.write("</table>");
document.write("<br><b>Total de Aprovados:</b> " + aprovados);
document.write("<br><b>Total de Reprovados:</b> " + reprovados);