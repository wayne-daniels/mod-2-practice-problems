/* eslint-disable no-unused-vars */
function toObject(keyValuePair){
  const key = keyValuePair[0];
  const value = keyValuePair[1];
  const newObj = {};
  newObj[key] = value;
  return newObj;
}
