var jogador1 = 1;
var jogador2 = 0;
var placar;

if (jogador1 != -1){
    
    if (jogador1 > 0){
        console.log('jogador 1 marcou ponto');
    } else if(jogador2 > 0){
        console.log('jogador 2 marcou ponto');
    } else{
        console.log('Ninguem marcou ponto')
    }
}else{
    console.log('Não pode iniciar jogador nao valido')
}


// iif ou if Ternario 
jogador1 != -1 && jogador2 != -1 ? console.log('Valido'):console.log('Não Valido');





if (jogador1 > 0 && jogador2 == 0){
    console.log('Jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;
}
else if (jogador2 > 0 && jogador1 == 0){
    console.log('Jogador 2 marcou ponto!');
    placar = jogador2 > jogador1;
}

switch(placar){
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou')
    break;

    case placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou')
    break;
    default:
        console.log('entrou no default do swithc case')
}