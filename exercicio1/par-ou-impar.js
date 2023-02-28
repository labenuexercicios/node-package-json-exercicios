function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  const computador = getRndInteger(0, 10);

  const jogadorParImpar = process.argv[2]
  const jogadorNum = process.argv[3]

  const resultado = computador + +jogadorNum

  if(jogadorParImpar.toLowerCase() === "par") 
  {
    if(resultado%2 === 0)
    {
        console.log(`Você escolheu par e o computador escolheu impar. O resultado foi ${resultado}. Você ganhou!`)
    }
    else
    {
        console.log(`Você escolheu par e o computador escolheu impar. O resultado foi ${resultado}. Você perdeu!`)
    }
  }

  else if(jogadorParImpar.toLowerCase() === "impar")
  {
    if(resultado%2 !== 0)
    {
        console.log(`Você escolheu impar e o computador escolheu par. O resultado foi ${resultado}. Você ganhou!`)
    }
    else
    {
        console.log(`Você escolheu impar e o computador escolheu par. O resultado foi ${resultado}. Você perdeu!`)
    }
  }
  else{
    console.log(`digite par ou impar e em seguida um numero`)

  }