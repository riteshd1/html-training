//Array is a collection of similiar data types
let a = [10,20,30,40,50];
let b = [60,70,80,90,100];
let c = [...a, ...b]; //[10,20,30,40,50,60,70,80,90,100];
// console.log("type a", typeof a);
// console.log("type b", typeof b);
// console.log("type c", typeof c);
// console.log("value c", c);


const addition2 = (num1,num2,num3,num4,num5,num6,num7,num8,num9,num10)=>{
    let result = num1+num2+num3+num4+num5+num6+num7+num8+num9+num10;
    console.log("result",result);
}
addition2(1,2,3,4,5,6,7,8,9,10);

let numbers = [1,2,3,4,5,6,7,8,9,10];
addition2(...numbers);
addition2(1,2,3,4,5,6,7,8,9,10);

