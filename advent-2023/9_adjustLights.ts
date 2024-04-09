/* Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!

Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, siempre deben estar alternadas. Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.

Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), devuelva el número mínimo de luces que hay que cambiar para que estén los colores alternos. */


function adjustLights(lights) {
  let changesInitRed = 0;
  let changesInitGreen = 0;

  //init red;
  for (let i=0; i <= lights.length; i++) {
    if (i % 2 === 0 && lights[i] === "🟢") changesInitRed++;
    if (i % 2 === 0 && lights[i] === "🔴") changesInitGreen++;
    
    if (i % 2 === 1 && lights[i] === "🔴") changesInitRed++;
    if (i % 2 === 1 && lights[i] === "🟢") changesInitGreen++;
  }
  
  return Math.min(changesInitRed,changesInitGreen)
}