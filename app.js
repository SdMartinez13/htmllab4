'use strict';

console.log('this is working')

let userName = prompt("What is your name?");

console.log(userName);


alert("Welcome, " + userName)



let userInput = prompt(" Do you LOVE Crafts?")
if (userInput === 'yes') {
    alert('Awesome, come on in and have a look around')
} else if (userInput === 'no') {
    alert('Come in and take a look anyway, you might find something you like')
} else {
    alert('thats not the answer we were looking for')
    
userInput = prompt("Do you LOVE Crafts?, Please type yes or no")
if (userInput === 'yes') {
    alert('Awesome, come on in and have a look around')
} else if (userInput === 'no') {
    alert('Come in and take a look anyway, you might find something you like')
} else {
    alert('thats not the answer we were looking for but welcome anyways!')
}
}

