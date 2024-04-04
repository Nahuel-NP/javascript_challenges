function findFirstRepeated(gifts: Array<number>) {

  const elementsArray:Array<{element:number,value:number}> = [];

  gifts.forEach((el, index) => {
    const indexofel = gifts.indexOf(el, index + 1);
    if (indexofel !== -1) {
      elementsArray.push({ element: el, value: indexofel - index })
    }
  })

  if (!elementsArray.length) return -1;

  //find the min value
  const auxArray = elementsArray.map(({ value }) => value);
  const min = Math.min(...auxArray);
  const element = elementsArray.find((element) => element.value === min)

  return element!.element;
}


const first = findFirstRepeated([5, 1, 5, 1])
console.log(first)