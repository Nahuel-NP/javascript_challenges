/* Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.

Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.

Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro: */

function drawGift(size: number, symbol: string) {
  if (size === 1) return "#\n";

  const gift: string[] = [];

  let skipCount = size - 1;

  const edgeCount = size - 2;

  let spaces = " ".repeat(skipCount);

  const border = "#".repeat(size);

  gift[size - 1] = `${border}${symbol.repeat(edgeCount)}#`;

  gift[0] = spaces + border;

  gift[size * 2 - 2] = border;

  for (let iteracion = 1; iteracion <= size; iteracion++) {

    spaces = " ".repeat(skipCount);

    skipCount--;

    if (iteracion !== 1 && iteracion !== size) {
      let repeat = iteracion - 2;

      gift[iteracion - 1] = `${spaces}#${symbol.repeat(
        edgeCount
      )}#${symbol.repeat(repeat)}#`;

      gift[size * 2 - iteracion - 1] = `#${symbol.repeat(
        edgeCount
      )}#${symbol.repeat(repeat)}#`;
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
