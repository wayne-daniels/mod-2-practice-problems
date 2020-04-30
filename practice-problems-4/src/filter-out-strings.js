/* eslint-disable no-unused-vars */
function filterOutStrings(array) {
  const filter = array.filter(function (item) {
    return (typeof item === "number")
  });
  return filter
}
