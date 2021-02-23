employees = []
function Employee(name, jobTitle, salary, status){
    this.name = name
    this.jobTile = jobTitle
    this.salary = salary
    this.status = "Full time"
}
let print = Employee.prototype.printEmployeeForm = function(){
    console.log(Employee())
        // return this.printEmployeeForm
        employees.push(print)
    }
let bob = new Employee("Bob", "V School Instructor", "#3000/hour")
let sue = new Employee("Sue", "V School Instructor", "$4500/hour", "Contract")
let steve = new Employee("Steve", "V School Admin", "$5000/hour")
console.log(bob)
console.log(employees)
