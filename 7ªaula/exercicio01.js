console.log("Questão 01-Circunferência");

var raio=5;
const PI = 3.14;
var area = PI * raio**2;

var comprimento = 2 * PI * raio;

console.log('área do circulo: '+area);
console.log('comprimento do círculo: '+comprimento);
console.log("=======================================================");
console.log("Questão 02-Desconto");

var preco = 156;
var porcentagem = 32/100;
var desconto = preco * porcentagem;
var preco_final = preco-desconto;
//evitar fazer isso nesse caso específico utilize as linhas acima.
var equacao = preco - (preco * 32/100);

console.log(preco_final);
console.log(equacao);
console.log("=======================================================");

console.log("Questão 04-Área trapézio");

var base_maior = 10;
var base_menor = 6;
var altura = 5;
//equação da área do trapézio.
var area_trapezio = (base_maior+base_menor)*altura/2

console.log(area_trapezio);

console.log("=======================================================");

console.log("Questão 05-hora para segundos");

horas = 13

segundos = horas*60*60

console.log(segundos)

console.log("=======================================================");

console.log("Questão 06-dilema do carro.");

var espaco_final = 5000;
var aceleracao = 3;
//equação horária do movimento retilíneo uneformemente variado.
var tempo = (espaco_final * 2)**(1/2)/aceleracao;

console.log(tempo);

console.log("=======================================================");


console.log(!(!true||(true&&false)&&false)); // false
console.log(45<10 || 25 =='25' && 34>=34); // true
console.log(45<10 && 14 === '14' || 25 != 25 || 3 > 56 || true);
// true