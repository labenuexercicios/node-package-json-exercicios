# Exercício 3
Nesse exercício você implementará um joguinho simples utilizando os conceitos vistos em aula.<br>
Trouxemos algumas ideias abaixo para te ajudar. Você pode escolher uma delas ou pensar em outra se quiser!<br>
Colocamos uma dica no final desse arquivo de markdown (.md): um exemplo de como gerar números aleatórios no JS.
<br>

## par-ou-impar.js
Dentro da pasta ```exercicios/```, crie o arquivo par-ou-impar.js e implemente o famoso joguinho!
A funcionalidade é:
- jogador é você, dev
- suas escolhas devem ser enviadas via argumentos no comando do terminal (process.argv)
    - par ou impar
    - e um número
- o adversário é o computador (que faz uma escolha aleatória)
- exemplos de fluxo:
    - ```node par-ou-impar.js par 1```
        - o computador gera um número aleatório entre 0 e 5
        - aparece no console: "Você escolheu par e o computador escolheu impar. O resultado foi 6. Você ganhou!"
    - ```node par-ou-impar.js impar 3```
        - o computador gera um número aleatório entre 0 e 5
        - aparece no console: "Você escolheu impar e o computador escolheu par. O resultado foi 4. Você perdeu!"
    - ```node par-ou-impar.js par 2```
        - o computador gera um número aleatório entre 0 e 5
        - aparece no console: "Você escolheu par e o computador escolheu impar. O resultado foi 2. Você ganhou!"

<br>

## pedra-papel-tesoura.js
Dentro da pasta ```exercicios/```, crie o arquivo pedra-papel-tesoura.js e implemente o famoso joguinho!
A funcionalidade é:
- jogador é você, dev
- sua escolha deve ser enviada via argumento no comando do terminal (process.argv)
- o adversário é o computador (que faz uma escolha aleatória)
- exemplos de fluxo:
    - ```node pedra-papel-tesoura.js pedra```
        - o computador escolhe aleatoriamente entre pedra, papel ou tesoura
        - aparece no console: "Você escolheu pedra e o computador escolheu tesoura. Você ganhou!"
    - ```node pedra-papel-tesoura.js papel```
        - o computador escolhe aleatoriamente entre pedra, papel ou tesoura
        - aparece no console: "Você escolheu papel e o computador escolheu tesoura. Você perdeu!"
    - ```node pedra-papel-tesoura.js tesoura```
        - o computador escolhe aleatoriamente entre pedra, papel ou tesoura
        - aparece no console: "Você escolheu tesoura e o computador escolheu tesoura. Empate!"

<br>

# Dica: como gerar um número aleatório em JS
Número aleatório entre o valor min e o valor max (incluem ambas extremidades).
```
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const numeroAleatorioEntreZeroEDez = getRndInteger(0, 10)
console.log(numeroAleatorioEntreZeroEDez)

const numeroAleatorioEntreUmENove = getRndInteger(1, 9)
console.log(numeroAleatorioEntreUmENove)

const numeroAleatorioEntreDezEQuinze = getRndInteger(10, 15)
console.log(numeroAleatorioEntreDezEQuinze)
```
