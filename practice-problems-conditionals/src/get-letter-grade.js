/* eslint-disable no-unused-vars */
function getLetterGrade(numericGrade) {
  if (numericGrade >= 90) {
    return "A"
  } else if (numericGrade >= 80 && numericGrade < 90) {
    return "B"
  } else if (numericGrade >= 70 && numericGrade < 80) {
    return "C"
  } else if (numericGrade >= 60 && numericGrade < 70) {
    return "D"
  } else {
    return "F"
  }
}
