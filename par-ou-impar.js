const argUser = process.argv[2].toLowerCase()
const numUser = Number(process.argv[3])

const argComp = argUser.toLowerCase() === "par" ? "impar" : "par"
const numComp = Number(Math.floor(Math.random()*20))

console.log(`Usuário escolheu ${argUser} e lançou ${numUser}. \nComputador escolheu ${numComp} e lançou ${argComp}`)

const resultado = (numUser + numComp)%2
if(resultado === 0 && arg === "par"){
    console.log(`Você escolheu par e o computador escolheu impar. O resultado foi ${numUser} Você ganhou!`)
}else{
    console.log(`Você perdeu!`)
}
