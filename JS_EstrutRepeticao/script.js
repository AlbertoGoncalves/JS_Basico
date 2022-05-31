// Uso de um FOR

let array1 = ['Valor1','Valor2','Valor3','Valor4','Valor5']; 

let object1 = {propriedade1: 'valor1',propriedade2: 'valor2'
,propriedade3: 'valor3'};

for(let ind = 0; ind < array1.length; ind++){
    console.log(ind)
}

// for/in
for(let ind1 in array1){
    console.log(ind1)
}

// for/in
for( i1 in object1){
    console.log(i1)
}


// interar em JS.
// for/of
for(ind2 of array1){
    console.log(ind2)
}

// for /of com object
for(i of object1.propriedade2){
    console.log(i);
}




var a = 0;
while (a < 10){
    a++;
    console.log(a);
}

var a = 0;
do {
   a++;
   console.log(a); 
}while(a < 10)
