const escolhaJogador = process.argv[2]

console.log(`Voce escolheu ${escolhaJogador.toLowerCase()}.`)

const escolhaComputador = [`Pedra`, `Papel`, `Tesoura`]
const escolha = escolhaComputador[Math.floor(Math.random()*escolhaComputador.length)]

console.log(`O Computador escolheu ${escolha}.`)

if(!escolhaJogador){
    console.log("Por favor, escolha pedra, papel ou tesoura!")
} else if(escolhaJogador === "pedra"){
    escolha === "Pedra" ? console.log("Empate.") :
    escolha === "Papel" ? console.log("Derrota.") :
    escolha === "Tesoura" ? console.log('Vitoria!') : console.log("Tente novamente.")
} else if(escolhaJogador === "papel"){
    escolha === "Pedra" ? console.log("Vitoria!") :
    escolha === "Papel" ? console.log("Empate.") :
    escolha === "Tesoura" ? console.log('Derrota') : console.log("Tente novamente.")
} else if(escolhaJogador === "tesoura"){
    escolha === "Pedra" ? console.log("Derrota") :
    escolha === "Papel" ? console.log("Vitoria!") :
    escolha === "Tesoura" ? console.log('Empate') : console.log("Tente novamente.")
}