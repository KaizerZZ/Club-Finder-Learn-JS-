const person = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}

let firstName = "Dimas";
let age = 20;

//inisialisasi nilai baru dengan 0bject destructuring
({firstName,age} = person);
//atau const {firstName,age} = person;
console.log(firstName);
console.log(age);

//assign dengan variabel lokal berbeda

({firstName: localFirstName,age: localAge} = person);
//atau const{firstName: localFirstName,age: localAge} = person;

console.log(localFirstName);
console.log(localAge);