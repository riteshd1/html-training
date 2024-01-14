let email = "contact@com";
let emailArr = email.split("");
// console.log("emailArr",emailArr);
// emailArr  = [
//     'c', 'o', 'n', 't',
//     'a', 'c', 't', '@',
//     'c', 'o', 'm'
//   ]
  
for(let i=0;i<emailArr.length;i++){
    let char = emailArr[i];
    if(char=='@'){
        console.log("yes : this is an email id");
    }
}
