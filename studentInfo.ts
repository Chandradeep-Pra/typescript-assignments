class Student{

    //Instance variables
    stuId:number=0;
    stuName:string="";
    stuAge:number=0;
    stuStandard:number=0;
    stuRollNo:number=0;
    stuAddress:any;
    stuContact:number=0;

    //Constructor
    constructor(stuId:number,stuName:string,stuAge:number,stuStandard:number,stuRollNo:number,stuAddress:any, stuContact:number){
        this.stuId=stuId;
        this.stuName=stuName;
        this.stuAge=stuAge;
        this.stuStandard=stuStandard;
        this.stuRollNo=stuRollNo;
        this.stuAddress=stuAddress;
        this.stuContact=stuContact;
    }
}

//Array for student records
var students = new Array();

let records = parseInt(window.prompt("How many records you want to insert:","")!);
for(let i = 1 ; i<= records;i++){
    let stuId = parseInt(window.prompt("Enter id:"," ")!);
    let stuName = window.prompt("Enter name:"," ");
    let stuAge = parseInt(window.prompt("Enter age:"," ")!);
    let stuStandard = parseInt(window.prompt("Enter standard:"," ")!);
    let stuRoll = parseInt(window.prompt("Enter Roll:"," ")!);
    let stuAddress = window.prompt("Enter Address:"," ");
    let stuContact = parseInt(window.prompt("Enter Contact:"," ")!);

    //Object
    let studentsRecord = new Student(stuId,stuName!,stuAge,stuStandard,stuRoll,stuAddress,stuContact);

    //Adding student info to students array
    students.push(studentsRecord);
}

 //displaying
for(let elm in students){
    console.log(students[elm]);
}




