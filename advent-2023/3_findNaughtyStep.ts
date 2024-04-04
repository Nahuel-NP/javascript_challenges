/* En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.
Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.
Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía. */


/* const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original = 'stepfor'
const modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

const original = 'abcde'
const modified = 'abcde'
findNaughtyStep(original, modified) // '' */

/* function findNaughtyStep(original: string, modified: string) {

  let step = '';
  let wordOne = '';
  let wordTwo = '';

  if (original.length > modified.length) {
    wordOne = original;
    wordTwo = modified;
  } else {
    wordTwo = original;
    wordOne = modified;
  }

  for (let i = 0; i < wordOne.length; i++) {
    if (wordOne.charAt(i) !== wordTwo.charAt(i)) {
      step = wordOne.charAt(i);
      break;
    }
  }
  return step;
} */

function findNaughtyStep(original: string, modified: string) {

  let step = '';
  let iteratorWord = modified.length >= original.length ? modified : original

  for (let i = 0; i < iteratorWord.length; i++) {
    if (original.charAt(i) !== modified.charAt(i)) {
      step = iteratorWord.charAt(i);
      break;
    }
  }
  return step;
}

const original = 'abcd'
const modified = 'abcde'
const diferentChar = findNaughtyStep(original, modified)
console.log(diferentChar)