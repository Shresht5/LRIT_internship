const data1 = {
    Name: "Shin",
    Attendence: 25,
}
const data2 = {
    Name: "Ron",
    Attendence: 23,
    salary: () => { console.log(this.name) }
}
const data3 = {
    Name: "marry",
    Attendence: 24,
}
const data4 = {
    Name: "Sunny",
    Attendence: 29,
}
const data5 = {
    Name: "Hari",
    Attendence: 27,
}
function salary(perDaySalary) {
    let Amount
    if (this.Attendence >= 25) {
        Amount = perDaySalary * this.Attendence;
    }
    else {
        Amount = perDaySalary * this.Attendence * 0.95;
    }
    console.log(`${this.Name} with ${this.Attendence} Attendence this month will have salary of ${Amount}`)
    console.dir()
}
salary.call(data1, 800);
salary.call(data2, 900);
salary.call(data3, 2000);
salary.apply(data4, [1000]);
const lastPersonSalary = salary.bind(data5, 700);
lastPersonSalary()