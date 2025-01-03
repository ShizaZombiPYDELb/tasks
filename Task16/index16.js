function Student(name, surname, birthDay, assessment = []) {
    this.name = name;
    this.surname = surname;
    this.birthDay = birthDay;
    this.assessment = assessment;
    this.lections = new Array(25).fill(null)
}
Student.prototype.getAge = function () {
    let totalDate = new Date().getFullYear();
    return totalDate - this.birthDay ;

}
Student.prototype.getAverage = function () {
    if (this.assessment.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < this.assessment.length; i++) {
        sum += this.assessment[i];
    }
    return sum / this.assessment.length;

}
Student.prototype.present = function () {
    const index = this.lections.indexOf(null);
    if (index !== -1) {
        this.lections[index] = true;
    } else {
        console.log("Масив відвідуваності заповнений.");
    }
}
Student.prototype.absent = function () {
    const index = this.lections.indexOf(null);
    if (index !== -1) {
        this.lections[index] = false;
    } else {
        console.log("Масив відвідуваності заповнений.");
    }
}
Student.prototype.summary = function () {

    let lection = this.lections.filter(lesson => lesson === true).length;
    let totalLection = lection / this.lections.length;

    let grades = this.assessment.reduce((sum, grade) => sum + grade, 0);
    let totalGrades = grades / this.assessment.length;

    if (totalGrades > 90 && totalLection > 0.9) {
        return "Молодець!";
    } else if (totalGrades > 90 || totalLection > 0.9) {
        return "Добре, але можна краще";
    } else {
        return "Редиска!";
    }

}

const student1 = new Student("Ля", "Тля", 1234, [5, 8, 92, 10, 85]);
student1.present();
student1.absent();
student1.present();
student1.absent();
student1.present();
student1.absent();
student1.absent();

console.log(student1.name);
console.log(student1.surname);
console.log(`Вік: ${student1.getAge()}`);
console.log(`Середній бал: ${student1.getAverage()}`);
console.log(student1.summary());

const student2 = new Student("Тут", "Там", 1234, [95, 88, 92, 92, 85]);

student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();

console.log(student2.name);
console.log(student2.surname);
console.log(`Вік: ${student2.getAge()}`);
console.log(`Середній бал: ${student2.getAverage()}`);
console.log(student2.summary());

const student3 = new Student("Жак", "фреско", 1911, [95, 98, 92, 100, 99]);

student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();

console.log(student3.name);
console.log(student3.surname);
console.log(`Вік: ${student3.getAge()}`);
console.log(`Середній бал: ${student3.getAverage()}`);
console.log(student3.summary());