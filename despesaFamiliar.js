/*

RECEITAS: []
DESPESAS: []

CALCULAR O VALOR DAS RECEITAS E DESPESAS E MOSTRAR UMA MENSAGEM AVISANDO SE O SALDO ESTA  
POSITIVO OU NEGATIVO
*/

let casal = {
  receitas: [2200, 1400, 500],
  despesas: [500, 100, 600]
}

function sum(array) {
  let total = 0

  for (let value of array) {
    total += value
  }
  return total
}

function calcularBalanço() {
  const totalReceitas = sum(casal.receitas)
  const totalDespesas = sum(casal.despesas)
  const total = totalReceitas - totalDespesas

  const itsOk = total >= 0

  let balanço = 'negativo'

  if (itsOk) {
    balanço = 'positivo'
  }

  console.log(`Seu valor é ${balanço}: R$ ${total.toFixed(2)}`)
}

calcularBalanço()
