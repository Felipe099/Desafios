/* DE 90 PRA CIMA - A
ENTRE 80 - 89 - B
ENTRE 70 - 79 - C
ENTRE 60 - 69 - D
MENOR QUE 60 - F
*/
let nota = 300

function score(nota) {
  let A = nota >= 90 && nota <= 100
  let B = nota <= 89 && nota >= 80
  let C = nota <= 79 && nota >= 70
  let D = nota <= 69 && nota >= 60
  let F = nota < 59 && nota >= 0

  if (A) {
    notaFinal = 'Nota A'
  } else if (B) {
    notaFinal = 'Nota B'
  } else if (C) {
    notaFinal = 'Nota C'
  } else if (D) {
    notaFinal = 'Nota D'
  } else if (F) {
    notaFinal = 'Nota F'
  } else {
    notaFinal = 'nota inválida'
  }

  return notaFinal
}

console.log(score(10))
console.log(score(-1))
console.log(score(101))
console.log(score(0))
console.log(score(75))
