function funcao(){
    console.log('teste Funcao');
}

funcao();





//Function Declarativas 

function funcao(teste1,teste2){
    console.log('teste Funcao', teste1,' ',teste2);
}

funcao('teste de Parametro','p44');


//Expressoes de Funcoes 
//expressao de funcao com nomeacao 
var funcao1 = function funcao2(){
    console.log('Teste Funcao dentro de uma variavel');
    console.log('expressao de funcao com nomeacao');
}

funcao1();




//Expressoes de Funcoes 
//expressao de funcao sem nomeacao 
var funcao1 = function(){
    console.log('Teste Funcao dentro de uma variavel');
    console.log('expressao de funcao sem nomeacao');
}

funcao1();





//Arrow Function 

var funArrow = () =>{
    console.log('sou uma Arrow function')
}

funArrow();



