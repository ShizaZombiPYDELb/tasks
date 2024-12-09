// const odj = {
//     name: "Проще позвонить чем у когото занимать",
//     age: "8-800-555-35-35" ,
//     Where: "на земле",
//     TOSHO: "тощо",
//     getInfo(){
//         console.log(`name: ${this.name};age (${this.age}); Where you live?: ${this.Where}; TOSHO: ${this.TOSHO}`);
//     }
//
// }
//
// odj.getInfo()

function User(name, age, place) {
    this.name = prompt("Enter your name");
    this.age = prompt("Enter your age");
    this.place = prompt("Enter your place");
}

User.prototype.getInfo = function(User) {
    return{
        name: this.name,
        age: this.age,
        place: this.place,
    }
}

const user = new User();
console.log(user.getInfo());