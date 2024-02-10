// includes()

let str = "I love India!";
let result =  str.includes("India");
// console.log("result",result);

let result1 = str.startsWith("A");
// console.log("result1",result1);

let result2 = str.endsWith("India!");

// console.log("result",result2);

let filename = "abc.png";

if(filename.endsWith(".java")){
    console.log("Yes! File is a Java file");
}else{
    console.log("No! File is not java file");
}

