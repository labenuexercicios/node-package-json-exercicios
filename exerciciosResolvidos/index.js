// Exercicio 1 - Criar o "package.json" - usamos o npm init

//Exercicio 2.1 -  coloque um console.log avisando que o aplicativo foi iniciado.
console.log("Aplicativo iniciado com sucesso")

//Exercicio 2.2 - Faça aparecer no console pelo menos um argumento. via process.argv
const nome = process.argv [2]
console.log(`Olá, ${nome}, seu aplicativo foi iniciado com sucesso!`)

