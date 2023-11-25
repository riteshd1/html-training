function checkAge() {
  let age = document.getElementById("age").value;
  let result = "";
  if (age >= 18) {
    result = "Adult";
  } else if (age < 18 && age >= 12) {
    result = "Teenager";
  } else {
    result = "Child";
  }
  document.getElementById("result").innerHTML = result;
}
