/* eslint-disable no-unused-vars */
function isDefined(input) {
  if (input === undefined) {
    return false
    // eslint-disable-next-line no-constant-condition
  } else if (input === 1 || "dog" || true || 0 || false || null) {
    return true
  }
}
