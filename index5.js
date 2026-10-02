// OBJECTS ASSINGMENT
//  Q1
// let userinfo =
// {
//     name: "Rahul",
//     email: "rahul@example.com",
//     role: "developer"
// }

// console.log(userinfo);


// Q2
// const product = {
//     name: "Laptop",
//     price: 50000,
//     category: "Electronics"
// };


// console.log(product.name);
// console.log(product.price);

// Q3

// const user = {
//     name: "Rahul",
//     email: "rahul@example.com",
// }

// console.log(user["email"]);

// Q4

// const user = {
//     name: "Rahul",
//     email: "rahul@example.com",
// }


// const key = "name"
// console.log(user[key]);

// Q5
// DOUBT
// let user = {
//     name: "Rahul",
//     role: "student"
// }

// let role = "developer"
// user["role"] = "developer"
// console.log(user);

// Q6
// let user = {
//     name: "Rahul",
//     email: "rahul@example.com"
// }

// user.isLoggedIn = "true"
// console.log(user);

// Q7

// const user = {
//     name : "Rahul",
//     email:"rahul@example.com",
//     role:"developer"
// }

// console.log(Object.keys(user));

// Q8

// const product = {
//     name: "Laptop",
//     price: 50000,
//     category: "Electronics"
// }

// console.log(Object.values(product));

// Q9

// const setting = {
//     theme: "dark",
//     language: "English",
//     notification: true
// }

// console.log(Object.entries(setting));

// Q10

// const user = {
//     name: "Rahul",
//     email: "rahul@example.com"
// }
// DOUBT
// // console.log(Object.entries(user));

// user.forEach(function (values, index) {
//     console.log(values, index);
// })

// Q11

// const user = {
//     name: "Rahul",
//     email: "rahul@example.com",
//     role: "developer"
// }

// const { name, email } = user
// console.log(name);
// console.log(email);


// Q12

// const product = {
//     name: "Laptop",
//     price: 50000,
// }
// // DOUBT
// const productName = "Laptop"


// console.log(price , ...productName) = product

// console.log(productName);


// Q13

// const name = "Rahul";
// const email = "rahul@example.com";
// const role = "developer";

// const user = {
//     name: "Rahul",
//     email: "rahul@example.com",
//     role: "developer",
// }

// console.log(user);

// Q14

// let user = {
//     name : "Rahul",
//     email : "rahul@example.com", 
//     role : "developer"
// }

// DOUBT
// user.fucntion displayUser (u){
//     console.log(user);
// }


// Q15

// const user = {
//     name : "Rahul",
//     role : "developer"
// }

// const newUser = {...user}

// console.log(newUser);

// Q16

// const user = {
//     name: "Rahul",
//     role: "student"
// }

// let role = "developer"
// user["role"] = "developer"


// const newObject = { ...user }


// console.log(newObject);\

// Q17

// const frontend = ["HTML", "CSS", "javascript"]
// const backend = ["Node.js", "Express"]

// let fullstack = [...frontend, ...backend]
// console.log(fullstack);


// Q18

function showedSkills(name, ...skills) {
    console.log(name);
    console.log(skills);

}

console.log(showedSkills("Rahul","HTML","CSS","javascripts"));

