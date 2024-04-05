/* Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:

. = Carretera
S = Trineo de Santa
* = Barrera abierta
| = Barrera cerrada
Ejemplo de carretera: S...|....|.....

Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.

Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.

Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo: */


const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)
/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/
function cyberReindeer(road: string, time: number) {
  // const withOutBarreras = road.replace('|','*');
  let positionOfS = road.indexOf('S'); // 0
  let output: string[] = [];
  let count = 0;
  let myRoad = road.split('');

  do {
    output.push(myRoad.join(''))

    if (count == 4) {
      myRoad = myRoad.map((value) => {
        if (value === '|') return '*'
        return value;
      })
    }

    const charAtNextPosition = myRoad[positionOfS + 1]; // .

    if (charAtNextPosition && charAtNextPosition !== '|') {
      myRoad[positionOfS + 1] = 'S';
      myRoad[positionOfS] = road[positionOfS] === '|' ? '*' :'.'
      positionOfS++;
    }
    count++;

  } while (count != time)
  return output
}