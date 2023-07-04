// ? UseCases
// * 1. Write a code to get Array of names from given array of users.
// * 2. Get back only active users.
// * 3. Sort user by age descending.

// ! Description
/*
    - We have Array of Objects.
    - In the object there are four data.id,name,isActive and age.
*/


const users = [
    {
        id: 1,
        name: "Ajay",
        isActive: true,
        age: 20
    },
    {
        id: 2,
        name: "Akash",
        isActive: true,
        age: 18
    },
    {
        id: 3,
        name: "Fraz",
        isActive: true,
        age: 34
    },
    {
        id: 4,
        name: "Vipin",
        isActive: false,
        age: 30
    },
];


// Solution 1 - Level 1 - brute force
const names3 = [];
for (let i = 0; i < users.length; i++) {
    if (users[i].isActive) {
        names3.push(users[i].name);
    }
}
console.log("---- Solution 1 ---------");
console.log(names3);  // print the names3

// Solution 2 - Level 2 
const names4 = [];
users.forEach((user) => {
    if (user.isActive) {
        names4.push(user.name)
    }
});
console.log("---- Solution 2 ---------");
console.log(names4);


console.log("-------- solution 3 ---------");
// const activeUser = users.filter((user)=>{
//     return user.isActive;
// })
// or 
// very sort approach. It's called method chaining.
const activeUser = users.filter((user) => user.isActive).map((user) => user.name);

console.log(activeUser);

// ? sort user by age descending order

const finalAns = users.filter((user) => user.isActive)
    .sort((user1, user2) => user1.age > user2.age ? -1 : 1)
    .map((user) => user.name);

console.log("Final answer is : ", finalAns);