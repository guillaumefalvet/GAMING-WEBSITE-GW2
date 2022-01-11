function myFunction() {
  var currentYear = document.getElementById("currentYear").value;
  var dateBirth = document.getElementById("dateBirth").value;

  document.getElementById("demo").innerHTML = currentYear - dateBirth;
}
