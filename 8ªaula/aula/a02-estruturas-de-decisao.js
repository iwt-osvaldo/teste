var nota = -11;

if (nota >= 7 && nota <= 10) {
    console.log('O aluno foi aprovado!');
}
else if (nota >= 3 && nota < 7) {
    console.log('O aluno está em recuperação');
} else if (nota >= 0 && nota < 3) {
    console.log('O aluno foi reprovado!');
} else {
    console.log('nota inválida.');
}