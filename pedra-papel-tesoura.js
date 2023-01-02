const escolhaUsuario = process.argv[2]
console.log(`O usuário escolheu ${escolhaUsuario}`);
const escolhaComputador = [`Pedra`, `Papel`, `Tesoura`]

const resultado = escolhaComputador[Math.floor(Math.random()*escolhaComputador.length)]
console.log(`O computador escolheu ${resultado}`);

if(!escolhaUsuario){
    console.log("Escolha: pedra, papel ou tesoura.")
}else if(escolhaUsuario === "pedra"){
    resultado === "Pedra" ? console.log("Empate!"):
    resultado === "Papel" ? console.log("Você perdeu!"):
    resultado === "Tesoura" ? console.log("Você ganhou!"): console.log("Tente de novo.");
}else if(escolhaUsuario === "papel"){
    resultado === "Pedra" ? console.log("Você ganhou!"):
    resultado === "Papel" ? console.log("Empate"):
    resultado === "Tesoura" ? console.log("Você perdeu!"): console.log("Tente de novo.");
}else if(escolhaUsuario === "tesoura"){
    resultado === "Pedra" ? console.log("Você perdeu!"):
    resultado === "Papel" ? console.log("Você ganhou!"):
    resultado === "Tesoura" ? console.log("Empate"): console.log("Tente de novo.");
}