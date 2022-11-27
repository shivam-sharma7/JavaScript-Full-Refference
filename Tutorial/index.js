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

// Some of very Important

let tech = " technology, Computer, Ram, SSD";
console.log(tech.split(", "));

// Arrays in javascript are variable that hold multiple values

 const fruits = ["Apple", "Orange", "Banana", "Grapes"];

 console.log(fruits);

 console.log(fruits[2]);

 console.log(fruits.length)

 // Another one
 
 const favFruits = ["Apple", "Banana", "keive", "Papaya"];

 //inserting new fruits
 favFruits[3] = "Chiku";

 console.log(favFruits);

 console.log(favFruits.indexOf("Banana"))

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

 

 