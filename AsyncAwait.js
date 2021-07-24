//Make sure to have installed node-fetch 
const fetch = require("node-fetch");

// This function will return promise
async function harry(){
    console.log("inside harry");
    
    // function will wait for fetch to complete, 
    //Mean while caller will go back and begin running next line of code
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    
    // function will wait for extracting json from response,
    // Mean while caller will go back and begin running next line of code
    const users = await response.json();
    console.log("users resoved");
    
    // Return the response
    return users;
}

console.log("before calling harry");
let a = harry();
console.log("after calling harry");

//This will only be executed when function harry will return promise
console.log(a.then( data => console.log("Hello")));


console.log("last line of JS file");