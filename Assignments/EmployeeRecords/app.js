const employees = []

function Employee(name, jobTitle, salary, status="Full time"){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "Full Time"
}

let print = Employee.prototype.printEmployeeForm = function(){
    console.log(Employee())
        // return this.printEmployeeForm
        employee.push(print)
    }

var bob = new Employee("Bob", "V School Instructor", "#3000/hour")
var sue = new Employee("Sue", "V School Instructor", "$4500/hour", "Contract")
var steve = new Employee("Steve", "V School Admin", "$5000/hour")
var Charice = new Employee("Charice", "Teacher Assistant", "$15/hour")
var London = new Employee("London", "Bridge Builder", "$5 per pass" )

London.status = "Forever"

Employee.push(bob, sue, steve, Charice, London)

Employee.prototype.printEmployeeForm = function () {
    console.log ('Name:${this.name}, Job Title: ${this.jobtitle}, Salary: ${this.salary}, Status: ${this.status} ')
}

bob.printEmployeeForm()
sue.printEmployeeForm()
steve.printEmployeeForm()
Charice.printEmployeeForm()
London.printEmployeeForm()

console.log(Employee)
