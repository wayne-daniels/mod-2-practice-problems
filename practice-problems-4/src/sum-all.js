/* eslint-disable no-unused-vars */
function sumAll(array) {
  const arrayReduce = (accumulator, currentValue) => accumulator + currentValue;
  return array.reduce(arrayReduce)
}
