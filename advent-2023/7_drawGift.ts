/* Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.

Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.

Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro: */

function drawGift(size: number, symbol: string) {
  if (size === 1) return "#\n";

  const gift: string[] = [];

  let skipCount = size - 1;

  const edgeCount = size - 2;

  const border = "#".repeat(size);

  let message = "";
  for (let iteracion = 1; iteracion <= size; iteracion++) {
    message = " ".repeat(skipCount);

    skipCount--;

    if (iteracion === 1) {
      gift[iteracion - 1] = message + border;
      gift[size * 2 - 2] = border;
    }

    if (iteracion !== 1 && iteracion !== size) {

      gift[iteracion - 1] = `${message}#${symbol.repeat(
        edgeCount
      )}#${symbol.repeat(iteracion - 2)}#`;

      gift[size * 2 - 1 - iteracion] = `#${symbol.repeat(
        edgeCount
      )}#${symbol.repeat(iteracion - 2)}#`;
    }

    if (iteracion === size - 1) {
      gift[size - 1] = `${border}${symbol.repeat(edgeCount)}#`;
    }
  }

  return gift.join("\n").concat("\n")
}

drawGift(4, "+");

//skip = size - iteracion
//size = 4;
// edgeCount (++) = size - 2;
/*
   #### 
  #++## 
 #++#+# 
####++#  
#++#+#   
#++##   
####    
*/

drawGift(5, "*");
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

drawGift(1, "^");
/*
#
*/
