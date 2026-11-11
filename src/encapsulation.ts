
// interface Employee {
//     name: string;
//     baseSalary: number;
// }



// const employee : Employee = {
//     name: 'John Doe',
//     baseSalary: 22000
    
// }

// ------- //

class Employee {
    name: string;
    private baseSalary: number;




    constructor(name:string="Atahar Shihab",baseSalary:number=35000){
        this.name = name;
        this.baseSalary = baseSalary;
    }


}



const employee = new Employee("John Doe", 22000);
const employee2 = new Employee();

// employee.baseSalary = 30000; // Error: Property 'baseSalary' is private and only accessible within class 'Employee'.

console.log(employee);
console.log(employee instanceof Employee);
console.log(employee2);
console.log(employee2 instanceof Employee);