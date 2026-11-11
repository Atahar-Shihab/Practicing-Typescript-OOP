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
    name;
    _baseSalary;
    role;
    department;
    constructor(name = "Atahar Shihab", baseSalary = 35000, role = "Software Engineer", department = "IT") {
        this.name = name;
        this._baseSalary = baseSalary;
        this.role = role;
        this.department = department;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary cannot be negative.");
        }
        else {
            this._baseSalary = newSalary;
        }
    }
    describe() {
        return `Employee: ${this.name}, Role: ${this.role}, Department: ${this.department}`;
    }
}
class Manager extends Employee {
    teamSize;
    constructor(teamSize, name = "Atahar Shihab", baseSalary = 35000, role = "Software Engineer", department = "IT") {
        super(name, baseSalary, role, department);
        this.teamSize = teamSize;
    }
}
const manager = new Manager(5, "Manager Smith", 50000, "Project Manager", "IT");
console.log(manager);
console.log(manager.describe()); // Output: Employee: Manager Smith, Role: Project Manager, Department: IT
console.log(manager.teamSize); // Output: 5
const employee1 = new Employee();
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
console.log(employee1.describe()); // Output: Employee: Atahar Shihab, Role: Software Engineer, Department: IT
export {};
//# sourceMappingURL=inheritance.js.map