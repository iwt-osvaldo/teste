//vetor == array
//             0   1   2   3   4         
var vogais = ['a','e','i','o','u'];
vogais[0] = 'y';

console.log(vogais[2]);

//matriz 
var cadastros = [
    // 0     1   2 
    ['maria',22,true],      //0
    ['antonio',18,false],   //1        
    ['roberto',37,true]     //2
];
//var cadastros = [['maria',22,true],['antonio',18,false],['roberto',37,true]];

cadastros[1][0] = 'josé';
console.log("nome: "+cadastros[1][0]+" é doador: "+cadastros[1][2]);