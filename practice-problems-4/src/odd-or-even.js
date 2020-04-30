/* eslint-disable no-unused-vars */
function oddOrEven(array) {
  const newArr = array.map(function (x) {
    return x % 2 == 0 ? 'even'
      : 'odd';
  })
  return newArr
}
