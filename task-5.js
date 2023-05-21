let userDetails = {
    name: "Shubham Sharma",
    age: 28,
    email: "Shubh@gmail.com",
    mobileNumber: 1234567890
}
 
for(let key in userDetails){
    console.log(userDetails[key]);
}
 
let keys = Object.keys(userDetails);
// [name, age, email]
console.log('Using Keys... For of')
for(let key of keys){
    console.log(userDetails[key])
}
 
console.log('Using for loop')
for(let i = 0; i < keys.length; i++){
    let key = keys[i];
    console.log(userDetails[key]);
}
 
console.log('Using forEach')
keys.forEach(key => {
    console.log(userDetails[key]);
})