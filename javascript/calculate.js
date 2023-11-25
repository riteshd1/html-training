function getAddition(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = parseInt(num1) + parseInt(num2); //"10"=>10
    // document.getElementById("result").innerHTML ="<h2>Test1234</h2>";
    // console.log("inner html:",document.getElementById("result").innerHTML);
    document.getElementById("result").innerHTML = result; //<h4>result</h4>
    console.log("Result",result);
}

function getMultiplication(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = parseInt(num1) * parseInt(num2);
    document.getElementById("result").innerHTML = result;
    console.log("Result",result);
}