
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
    private _baseSalary: number;
    public readonly role: string;
    protected department: string;




    constructor(name:string="Atahar Shihab",baseSalary:number=35000,role:string="Software Engineer",department:string="IT"){
        this.name = name;
        this._baseSalary = baseSalary;
        this.role = role;
        this.department = department;
    }


    get baseSalary(): number {
        return this._baseSalary;
    }

    set baseSalary(newSalary : number){
        if(newSalary < 0){
            throw new Error("Salary cannot be negative.");
        }
        else{
        this._baseSalary = newSalary;
}
    }
}






const employee = new Employee("John Doe", 22000);
const employee2 = new Employee();




console.log(employee.baseSalary);

// employee.baseSalary = 30000; // Error: Property 'baseSalary' is private and only accessible within class 'Employee'.

// console.log(employee.baseSalary); // Error: Property 'baseSalary' is private and only accessible within class 'Employee'.
// employee.department = "HR"; // Error: Property 'department' is protected and only accessible within class 'Employee' and its subclasses.
// console.log(employee.department); // Error: Property 'department' is protected and only accessible within class 'Employee' and its subclasses.
console.log(employee);
console.log(employee instanceof Employee);
console.log(employee.role);
console.log(employee2);
console.log(employee2 instanceof Employee);

employee.baseSalary = 30000; // Using the setter to update the baseSalary
console.log(employee.baseSalary);
