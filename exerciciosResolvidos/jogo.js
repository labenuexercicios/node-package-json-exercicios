//Exercicio 3 - Crie um joguinho simples utilizando os conceitos vistos em aula.
//jogador é você, dev - devem ser enviadas via argumentos

//(process.argv)


const jogador = process.argv[2].toLowerCase();
const escolha = ["pedra", "papel", "tesoura"];
const computador = escolha[Math.floor(Math.random()*2)];

if(jogador === "pedra"){
    if(computador === "pedra"){
        console.log("Empate")
    } else if ( computador === "papel"){
    console.log("Computador ganha")
}else{
    console.log("Jogador ganhou")
}
}else if( jogador === "papel"){
    if(computador === "papel"){
         console.log("Empate")
    }else if (computador === "tesoura"){
        console.log("Computador ganha")
    }else{
        console.log("Jogador ganhou")
    }
} else if (jogador === "tesoura"){
    if(computador === "tesoura"){
        console.log("Empate")
    }else if (computador === "pedra"){
        console.log("computador ganha")
    } else{
        console.log("Jogador ganhou")
    }
}