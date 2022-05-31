/* Exemplo de Objetos em JS*/
// teste de comentario ctrl + ;
let object = {string:'string',number: 1,boolean:true,array: ["array"],objetInterno: {objetInterno:'objetInterno'} };
console.log(object);

// Acessando Propriedades do Object
console.log(object.boolean);
console.log(object.objetInterno);
console.log(object.string);


// Desestruturação de objetos 
var string = object.string;
console.log(string);

var number = object.number;
console.log(number);

// Outra forma de Manipular objetos Desestruturção
// utilizando chaves ao declar variavel 
var {number,string,objetInterno} = object;
console.log(number,string,objetInterno);