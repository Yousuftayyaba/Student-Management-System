import inquirer from "inquirer"

class student{
    static counter = 1000;
    id: number;
    name: string;
    courses: string[];
    balance: number;

    constructor(name:string){
        this.id = student.counter++;
        this.name =name;
        this.courses = [];
        this.balance = 100;
    }
//method to enroll a student in a course
enroll_course(course:string){
    this.courses.push(course);
}
//method to view a student balance
view_balance(){
    console.log(`Balance for ${this.name} : ${this.balance}`);
}

//method to pay student tuition fee
pay_fees(amount:number){
this.balance -= amount
console.log(`$${amount} Fees paid successfully for ${this.name}`);
}
//method to display student status

}