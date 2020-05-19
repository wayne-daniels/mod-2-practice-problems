/* eslint-disable no-unused-vars */
function compact(array) {
   for (let i = 0; i < array.length; i++){
    if (!array[i]) {
      array.splice(i, 1);
    }
  }
  return array;
  }
