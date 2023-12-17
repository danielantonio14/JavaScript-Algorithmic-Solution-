 /* Objectivo : Desenvolver uma fórmula que calcula a  média de notas de estudantes de um instituto Militar
 
 - Deve ter a capacidade de receber várias notas
 
 */
 
    
 /* Primeira tentativa e errada 

 _________________________________________
 var function media1(params) {
    
    var notas = [2,3,4,5,];
    for ( var lista in notas){
        var media = lista /  notas.length ;
    }
}   console.log(media)  

___________________________________________
Erros?
   1- Uncaught SyntaxError: Unexpected token 'function' (A declaração da função )
      Por Javascript tem deve ser : 
      function media1(params) { ou var media1 = function(params) {

  2- for ( var lista in notas){: Aqui você estava usando um loop for...in, 
    que é usado para iterar sobre as propriedades de um objeto. Para iterar 
    sobre um array, eu deveria usar um loop for regular ou um loop for...of.

*/



// Segunda tentativa erro corrigido kkk lembrar que o objectivo era calcular media nao importava a quantidade de valooes na entrada kk
 // usando for regular 


function media1() {
    var notas = [2,3,4,5];
    var soma = 0;
    for (var i = 0; i < notas.length; i++){
        soma += notas[i];
    }
    var media = soma / notas.length;
    console.log(media);
}
media1();  // Chama a função


//usando for of
function media(){
    var notas = [2,5,7,6];
    var soma =0;

    for ( var nota of notas ){
          soma=+nota;
    };
    var  media = soma / notas.length;

}
media();


// Forma moderna e mais limpa, vamos usar o método reduce ( pesquisem como funciona ele)
// reparem nos 3 pontos no parametro da funcao media  estamos usando o conceito de destruturacao de arrays 

function media (...numbers){ 
    soma = numbers.reduce((accum,num)=> accum+num,0);

    return soma / numbers.length
}

console.log(media(2,5,7,6));









/*   Sugestões 

- usa a extensão : code runner para rodar javascript no vscode


*/