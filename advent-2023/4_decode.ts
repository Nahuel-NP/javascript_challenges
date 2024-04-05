
/* En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés

Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto. */


function decode(message) {
  const regEx = /\(([^()]+)\)/;
  let match = message.match(regEx);

  while (match) {
    const withOutParentesis = match[0].slice(1, -1)
    const reversedString = withOutParentesis.split('').reverse().join('');
    message = message.replaceAll(match[0], reversedString);
    match = message.match(regEx);
  }
  return message;
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus