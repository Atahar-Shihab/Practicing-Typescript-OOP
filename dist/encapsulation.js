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
    baseSalary;
    constructor(name = "Atahar Shihab", baseSalary = 35000) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
}
const employee = new Employee("John Doe", 22000);
const employee2 = new Employee();
console.log(employee);
console.log(employee instanceof Employee);
console.log(employee2);
console.log(employee2 instanceof Employee);
export {};
//# sourceMappingURL=encapsulation.js.map