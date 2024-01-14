// ES6
// **map, filter , reduce**
const cars = ["BMW", "Volvo", "Mini","Suzuki"];
// let isVolvo = cars.map((car)=>{
//     if(car=='Volvo'){
//         return car;
//     }
// });

let isVolvo = cars.filter((car)=>{
    if(car=='Volvo'){
        return car;
    }
});

// console.log("isVolvo",isVolvo);


let person = [
    {
        "name":"Shyam",
        "age":20,
        "mobile":"999999999"
    },
    {
        "name":"John",
        "age":23,
        "mobile":"999999999"
    },
    {
        "name":"Sameer",
        "age":30,
        "mobile":"999999999"
    },
    {
        "name":"Sameer",
        "age":50,
        "mobile":"999999999"
    },
    {
        "name":"Sameer",
        "age":23,
        "mobile":"999999999"
    },
    {
        "name":"Shyam",
        "age":14,
        "mobile":"999999999"
    },
    {
        "name":"Shyam",
        "age":19,
        "mobile":"999999999"
    },
];

let result = person.filter((item)=>{
    if(item.age>20){
        return item;
    }
});

console.log("result",result);