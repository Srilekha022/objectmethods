//1.
var car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020
}
Object.freeze(car);
car.model = 'Camry';
console.log(car); //{make: 'Toyota', model: 'Corolla', year: 2020}

//2.
var a = {
    name: "sri",
    age: 30,
    email: "sri@email.com"
}
console.log(Object.isFrozen(a));//false
Object.freeze(a);
console.log(Object.isFrozen(a));//true
console.log(a); //{name: 'sri', age: 30, email: 'sri@email.com'}

//3.
var product = {
    name: 'Phone',
    category: 'Electronics',
    price: 15000
}
console.log(Object.isSealed(product)); // false
Object.seal(product);
console.log( Object.isSealed(product)); // true
console.log(product); //{name: 'Phone', category: 'Electronics', price: 15000}

//4.
var laptop = {
    brand: "Dell",
    model: "XPS 13",
    price: 12000
}
console.log(Object.keys(laptop));   //['brand', 'model', 'price']

//5.
var house = {
    location: "Nizamabad",
    size: "1000 sqft",
    price: 500000
}
console.log(Object.values(house));   //['Nizamabad', '1000 sqft', 500000]

//6.
var smartphone = {
    brand: "Apple",
    model: "iPhone 14",
    price: 9999
}
Object.seal(smartphone);
smartphone.price = 10999;
console.log(Object.isSealed(smartphone)); // true
console.log(smartphone); // { brand: 'Apple', model: 'iPhone 14', price: 1099 }

//7.
var book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925
}
Object.freeze(book);
book.publishedYear = 2024; 
console.log(Object.isFrozen(book)); // true
console.log(book); // { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedYear: 1925 }

//8.
var person = {
    firstName: "Srilekha",
    lastName: "Masam",
    age: 15
}
console.log(Object.Keys(person));   //['firstName', 'lastName', 'age']
console.log(Object.values(person));   //['Srilekha', 'Masam', 15]

//9.
var course = {
    title: "JavaScript 101",
    instructor: "John Smith",
    duration: "4 weeks"
}
console.log(Object.entries(course)); // [['title', 'JavaScript 101'], ['instructor', 'John Smith'], ['duration', '4 weeks']]
delete course.duration;
console.log('Updated course object:', course); // { title: 'JavaScript 101', instructor: 'John Smith' }

//10.
var employee = {
    name:"Sri",
    position: "Developer",
    salary: 75000
}
Object.seal(employee);
employee.position = "Senior Developer";
employee.department = "Engineering"; 
console.log(employee); // { name: 'Sri', position: 'Senior Developer', salary: 75000 }
console.log(Object.keys(employee)); // ['name', 'position', 'salary']



