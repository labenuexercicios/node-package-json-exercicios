const choosePlayer = process.argv[2]

console.log(`Você escolheu: ${choosePlayer.toLowerCase()}.`)

const chooseComputer = [`Pedra`, `Papel`, `Tesoura`]

//lógica para escolher aleatoriamente um dos elementos dentro do array chooseComputer
const choice = chooseComputer[Math.floor(Math.random()*chooseComputer.length)]

console.log(`O Computador escolheu: ${choice}.`)

if(!choosePlayer){
    console.log("Por favor, escolha pedra, papel ou tesoura!")
} else if(choosePlayer === "pedra"){
    choice === "Pedra" ? console.log("Empate.") :
    choice === "Papel" ? console.log("Derrota.") :
    choice === "Tesoura" ? console.log('Vitoria!') : console.log("Tente novamente.")
} else if(choosePlayer === "papel"){
    choice === "Pedra" ? console.log("Vitoria!") :
    choice === "Papel" ? console.log("Empate.") :
    choice === "Tesoura" ? console.log('Derrota.') : console.log("Tente novamente.")
} else if(choosePlayer === "tesoura"){
    choice === "Pedra" ? console.log("Derrota.") :
    choice === "Papel" ? console.log("Vitoria!") :
    choice === "Tesoura" ? console.log('Empate.') : console.log("Tente novamente.")
}