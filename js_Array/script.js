
let array = ["teste", 1 , 1 ,true,"calor"];
console.log(array)
console.log(array[0])
console.log(array[2])

array.forEach(function(item,index){console.log(item,index)});

array.push("Novo item no final do Arry")
console.log(array)

array.pop("Remove item no final do Arry")
console.log(array);

array.shift("Remove item no inicio do Arry");
console.log(array);

array.unshift("add item no inicio do Arry");
console.log(array);


console.log(array.indexOf(true));

array.splice(2,1);  /* PODE COMER OU LIMPAR O ARRAY TEM OUTROS METODOS   */
console.log(array)


let novoArray = array.slice(0,3)
console.log(novoArray)
alert("teste 02 Externando scritp")


