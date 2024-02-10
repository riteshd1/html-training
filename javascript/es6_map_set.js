// let arr = ["apples",500,3]

let arr = [
    ['apples',500],
    ["bananas", 300],
    ["oranges", 200]
];

// One Dimesion - [
//     1,2,3,4
// ]
// Two Dimesion - 
// {
//     "num1":1,
//     "num2":2,
// }

// new - to create an object of a class;


const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  fruits.set("oranges",800);
  let apples = fruits.get("oranges");
  console.log("output",apples);