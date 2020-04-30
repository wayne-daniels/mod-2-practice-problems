
/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
function isTruthy(input) {
  if (input == 1 || input == "dog" || input == true) {
    return true;
  } else if (input == 0 || input == false || input == undefined || input == typeof string || input == null) {
    return false;
  }
}
