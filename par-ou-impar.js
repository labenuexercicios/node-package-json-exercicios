const escolhaJogador = process.argv[2]
const numeroJogador = process.argv[3]

console.log(`Voce escolheu ${escolhaJogador}.`)
console.log(`Voce escolheu ${Number(numeroJogador)} dedos.`)

if (!escolhaJogador) {
    console.log("Escolha um numero par ou impar e tente novamente")
} if (escolhaJogador === "par") {
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const numeroAleatorioEntreUmeNove = getRndInteger(0, 10)
    console.log("O Computador escolheu impar")
    console.log(`O computador escolheu ${numeroAleatorioEntreUmeNove} dedos.`)
    let resultado = Number(numeroJogador) + Number(numeroAleatorioEntreUmeNove)
    console.log(`A soma dos dedos deu ${resultado}.`)
    resultado % 2 == 0 ? console.log("Voce ganhou!") : console.log("Voce perdeu!")
} else {
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const numeroAleatorioEntreUmeNove = getRndInteger(0, 10)
    console.log("O Computador escolheu par.")
    console.log(`O computador escolheu ${numeroAleatorioEntreUmeNove} dedos.`)
    let resultado = Number(numeroJogador) + Number(numeroAleatorioEntreUmeNove)
    console.log(`A soma dos dedos deu ${resultado}.`)
    resultado % 2 == 1 ? console.log("Voce ganhou!") : console.log("Voce perdeu!")
}