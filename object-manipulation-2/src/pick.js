/* eslint-disable no-unused-vars */
function pick(source, keys){
  return keys.map(k => k in source ? { [k]: source[k] } : {})
    .reduce((res, o) => Object.assign(res, o), {});
}
