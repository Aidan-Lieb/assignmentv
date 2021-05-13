let area = 0
let cir = 0
document.getElementById('calculate').addEventListener('click',calculations)
function calculations () {
  area = document.getElementById('inputrad').value
  area = area * area * Math.PI
  document.getElementById("outputarea").innerHTML = "Area = " + area
  cir = document.getElementById('inputrad').value
  cir = 2 * cir * Math.PI
  document.getElementById("outputcir").innerHTML = "Circumference = " + cir
}