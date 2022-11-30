// Primitive Data Type- String, Number, Boolean, null, undefined

const name = 'Shivam Sharma';
const age = 22;
const clg = true;
const n = null;
let s;

console.log(typeof age);
console.log(typeof name);
console.log(typeof clg);
console.log(typeof n);
console.log(typeof s);

// Concatenation in string
console.log("my Name is "+ name +" My age is "+ age);

// let's see some of the String Methods 

let String = "Hey, i am Shivam Sharma";

console.log(String.length);

console.log(String.toUpperCase());

console.log(String.toLowerCase());

console.log(String.substring(0, 5));

console.log(String.substring(0, 3).toUpperCase());

console.log(String.split(''))

// Some of very Important methos od string

let tech = " technology, Computer, Ram, SSD";
console.log(tech.split(", "));

// Arrays in javascript are variable that hold multiple values.

 const fruits = ["Apple", "Orange", "Banana", "Grapes"];

 console.log(fruits);

 console.log(fruits[2]);

 console.log(fruits.length)

 // Another one
 
 const favFruits = ["Apple", "Banana", "keive", "Papaya"];

 //inserting new fruits
 favFruits[3] = "Chiku";

 console.log(favFruits);

 console.log(favFruits.indexOf("Banana"));

// Reverse Arrays in javascript
 let arr = [12, 34, 64, 78, 87, 90];

 for(let i = arr.length-1; i>=0; i--){

    console.log(arr[i]);
 }
 
// Object in javascript is basically key value pair

const person ={

    firstName: "Shivam",
    lastName: "Sharma",
    Age: 22,
    Height: 170,
    Degree: "Computer Science",
    Hobbies: ["music", "movie", "code"],

    //Object within object
    address: {
        
        street: "Mirzamurad",
        city: "Varansi",
        state: "Uttar Pradesh"
    }
}

//object- we can also add the properties
person.email = "meshivam81@gmail.com";
console.log(person)

console.log(person.firstName);

console.log(person.lastName);

console.log(person.Age);

console.log(person.Degree);

console.log(person.Hobbies[1]);

// Accesing Object within object

console.log(person.address.city);
console.log(person.address.address);

//object- we are doing like above 👆
const {firstName, lastName} = person;
console.log(firstName);
console.log(lastName);


//Arrays of objects, let's create a of todos

const todos = [
    {
        id: 1223,
        text: "take out trash",
        isCompleted: true,
    },
   
    {
        id: 1224,
        text: "meeting with boss",
        isCompleted: true,
    },

    {
        id: 1225,
        text: "Content Creation",
        isCompleted: true
    }
];

console.log(todos);

// 👇 printing very imp learn. you can do more like below

console.log(todos[1].text);

// we can convert array of object into json to serve our data, it's pretty similar

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// Loops in JavaScript

for(let i =1; i<=10; i++){

    if(i === 10){
        break;
    }
  console.log();
}

//While loop

let j =1;

while(j >=10){
 
    console.log(j);

    j++;
}

// we can get our data from todos via loop

for(let i=0; i<todos.length; i++){

    console.log(i);
}

for(let todo of todos){

    console.log(todo.text)
}

//Arrays of objects, let's create a of emplyoee

const employees = [
    {
        emp_id: 12344,
        name: "Shivam Sharma",
        Work: "DevRel Manager",
        office: "London",
        salary: "$52000"

    },

    {
        emp_id: 12345,
        name: "Kunal Kushwaha",
        Work: "DevRel Manager",
        office: "London",
        salary: "$60000" 
    }
]

// Now this is very crucial high order array methods- forEach, map, filter

employees.forEach((employee)=>{

    console.log(employee.name);
});

const todoText = employees.map((todo)=>{
    
    return todo.name;
});

console.log(todoText);

const todosText = employees.filter((todo)=>{
    
    return todo.salary;
});

console.log(todosText);

 //Conditional in javascript

 const x = 10;

 if(x===10){

    console.log("x is 10");
 } else{

    console.log("x is't 10");
 }

 // Ternary Operator in

 const a = 11;

 const color = a > 10 ? "red" : "blue";

 console.log(color);

 // Switch case in javascript

 const colors = "green";

 switch(colors){
  
    case "red":
        console.log("color is red");
        break;

    case "blue":
    console.log("color is blue");
    break;

    default:
        console.log("color is not red");
        break;
 }

 // function in javascipt is very important below ex is old

 function additions(num1, num2){

    return num1 + num2;
 }

 console.log(additions(20, 50));

 // same way but arrow function very important

 let addition = ((num3, num4)=>{

    return num3 + num4;
 })

 console.log(addition(20, 10))

 // same way but arrow function
 
 const substraction = ((a1, a2)=>{
    return a1 - a2;
 })

 console.log(substraction(30, 10));

 // Oops in JavaScript in ES6 CLASSES very important....

 class Person{

    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
    }
 }

 const person1 = new Person("Shivam", "Sharma", "14-7-2002");

 console.log(person1.firstName);
 console.log(person1.dob);


 // Defining class in a Traditional Way.
function Vehicle(name,maker,engine){
    this.name = name,
    this.maker = maker,
    this.engine = engine
};
 
Vehicle.prototype.getDetails = function(){
    console.log('The name of the bike is '+ this.name);
}
 
let bike1 = new Vehicle('Hayabusa','Suzuki','1340cc');
let bike2 = new Vehicle('Ninja','Kawasaki','998cc');
 
console.log(bike1.name);
console.log(bike2.maker);
console.log(bike1.getDetails());
