
let numberOne = Number(prompt('Digite o primeiro número'))
let numberTwo = Number(prompt('Digite o primeiro número'))

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let multi = numberOne * numberTwo
let div = numberOne / numberTwo
let restDiv = numberOne % numberTwo


alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${multi}`)
alert(`A divisão dos dois números: ${div}`)
alert(`O resto da divisão dos dois números é: ${restDiv}`)

if (sum / 2) {
  sum == 0,2,4,6,8,10 
  alert(`A soma é numero par: ${sum}`)
} else {
  alert(`A soma é numero impar: ${sum}`)
}

if (numberOne === numberTwo) {
  alert('Os numeros são iguais')
} else {
  alert('Os números são diferentes')
}
