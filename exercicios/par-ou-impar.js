//função para gerar número aleatório
const getRndInteger = (min, max) =>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const computer = getRndInteger(0, 10);

const playerPairOdd = process.argv[2];
const playerNumber = process.argv[3];

const result = computer + +playerNumber;

if(playerPairOdd.toLowerCase() === 'par'){
    if(result % 2 === 0){
        console.log(`Você escolheu par e o computador impar. O resultado foi ${result}. Você ganhou!`);
    }else{
        console.log(`Você escolheu par e o computador impar. O resultado foi ${result}. Você perdeu!`);
    }
}else if(playerPairOdd.toLowerCase() === 'impar'){
    if(result % 2 !== 0){
        console.log(`Você escolheu impar e o computador par. O resultado foi ${result}. Você ganhou!`);
    }else{
        console.log(`Você escolheu impar e o computador par. O resultado foi ${result}. Você perdeu!`);
    }
}else{
    console.log('Digite par ou impar e em seguida um número.');
}