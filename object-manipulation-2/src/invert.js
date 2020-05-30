/* eslint-disable no-unused-vars */
function invert(source){
  let new_obj = {};

  for (let prop in source) {
    if (source.hasOwnProperty(prop)) {
      new_obj[source[prop]] = prop;
    }
  }

  return new_obj;
}
