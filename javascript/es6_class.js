class Student{
    
    constructor(){
        this.rollNo="";
        this.studName = "";
        this.studDOB = "";
    }

    getStudent(){
        return {
            "rollNo":this.rollNo,
            "studName":this.studName,
            "studDOB":this.studDOB
        }
    }
    getRollNo(){
        return this.rollNo;
    }
    setRollNo(value){
        this.rollNo = value;
    }
    setStudName(value){
        this.studName = value;
    }
    setStudDOB(value){
        this.studDOB = value;
    }
}

let stud = new Student();
stud.setRollNo(2);
// stud.setStudName("Rahul");
// stud.setStudDOB("24-12-2002");
let result = stud.getStudent();


console.log("result",result);