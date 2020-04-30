/* eslint-disable no-unused-vars */
function getSalutation(hourOfDay) {
  if (hourOfDay >= 0 && hourOfDay < 12) {
    return "good morning!"
  } else if (hourOfDay >= 12 && hourOfDay < 16) {
    return "good afternoon!"
  } else if (hourOfDay >= 16 && hourOfDay < 20) {
    return "good evening!"
  } else {
    return "good night!"
  }
}
