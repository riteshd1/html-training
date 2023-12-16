let colors = ['Red','Green','Pink','Yellow'];
console.log("colors Before:",colors);

//to add element in array at last position
 colors.push('Purple');

//to add element at the first position
 colors.unshift("White");

//to remove last element of array
 colors.pop();

//to remove  the first position element
colors.shift();

console.log("colors After:",colors);
/* ----------------------------------------------------------------- */
let courses = ['ReactJS','HTML','CSS','Javascript'];
console.log("Courses Before:",courses);

//replace HTML with NodeJS
// courses[1] = 'NodeJS';
//console.log("Courses After:",courses);

//toString
// courses = courses.toString();
// console.log("Courses toString:",courses);

//delete
// delete courses[2];
//to remove perticular element
courses.splice(1,1);
console.log("Courses Before:",courses);


