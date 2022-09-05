const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  let bmi = weight/(height*height)
  return bmi
}
function getBMIMeaning(weight, height) {
  let cal = calculateBMI(weight, height)  
  return cal>18.5?cal>24.9?"Overweight":"Normal weight":"Underweight"
}
module.exports = getBMIMeaning
