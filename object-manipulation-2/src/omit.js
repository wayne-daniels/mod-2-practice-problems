/* eslint-disable no-unused-vars */
function omit(source, keys){
  let target = {};
  for (let i in source) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(source, i)) continue;
    target[i] = source[i];
  }
  return target;
}
