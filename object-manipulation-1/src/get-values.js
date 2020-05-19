/* eslint-disable no-unused-vars */
function getValues(object){
  const arrValues = [];
  for (const property in object) { arrValues.push(object[property]); }
  return arrValues;
}
