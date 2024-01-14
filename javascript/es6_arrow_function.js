//ES5
function addition1(a,b){
    let result = a+b; //30
    result = result *2; //30x2
    return result;
}
//console.log("result",addition(10,10));

// //ES6
let addition = (a,b)=>{
    let result = a + b;
    result = result * 2;
    return result;
};
// let result =addition(10,20);
console.log("result",addition(10,20));

// // let addition = (a,b)a-b;
// let result = substration(10,20);
// console.log("result sub:",result);