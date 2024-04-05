/*
En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.
Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.
¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!
En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1. */

// first solution
/* function findFirstRepeated(gifts: Array<number>) {

  const elementsArray: Array<{ element: number, indexSecond: number, }> = [];

  gifts.forEach((el, index) => {
      const indexofel = gifts.indexOf(el, index + 1);
      if (indexofel !== -1) {
        elementsArray.push({ element: el, indexSecond:indexofel})
      }
  })

  if (!elementsArray.length) return -1;

  const auxArray = elementsArray.map(({ indexSecond }) => indexSecond);
  const min = Math.min(...auxArray);
  const element = elementsArray.find((element) => element.indexSecond === min);

  return element!.element;
} */

// optimal solution

function findFirstRepeated(gifts: Array<number>) {
  const includedNumbers: number[] = [];

  for (const number of gifts) {
    if (includedNumbers.includes(number)) return number;

    includedNumbers.push(number)
  }
  return -1
}

const first = findFirstRepeated([5, 1, 5, 1])
console.log(first)