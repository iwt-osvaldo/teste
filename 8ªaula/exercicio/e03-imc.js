var altura=1.84;
var peso=115;
var imc = peso/altura**2;

if(imc<18.5)
    console.log('abaixo do peso');
else if(imc>=18.5 && imc < 25)
    console.log('peso normal');
else if(imc>=25 && imc < 30)
    console.log('sobrepeso')
else if(imc>=30 && imc < 35)
    console.log('obesidade grau I');
else if(imc>=35 && imc < 40)
    console.log('obesidade grau II');
else   
    console.log('Obesidade mórbida');
