const cars = ["BMW", "Volvo", "Mini","Suzuki"];
// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);
// console.log(cars[3]);

// for(let car of cars){
//     console.log(car);
// }

//ES6 version
let arr = [10,20,30,40,50,60,20,40];
// let result = arr[0] + arr[1] +arr[2]+arr[3]+arr[4]+arr[5];
// console.log("result",result);
// let result=0;
// for(let num of arr){
//     result = result+num;   
// }

//ES5 version
let result=0;

for(let i=0; i<arr.length; i++){
    result = result+ arr[i]; 
    if(i==3){
        break;
    }
}
console.log("result",result);
    