function add() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = parseInt(num1) + parseInt(num2);
    document.getElementById("result").innerHTML = result;
}
function multiply() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = parseInt(num1) * parseInt(num2);
    document.getElementById("result").innerHTML = result;
}
function checkAge() {
    console.log("document",document);
    let age = document.getElementById("age").value;
    if (age > 18) {
        console.log("Adult");
        document.getElementById("result").innerHTML = "Adult";
    } else {
        document.getElementById("result").innerHTML = "Child";
        console.log("Child");
    }
}