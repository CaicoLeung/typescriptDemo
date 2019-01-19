var Student = /** @class */ (function () {
    function Student(fristName, middleInitial, lastName) {
        this.fristName = fristName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = fristName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
