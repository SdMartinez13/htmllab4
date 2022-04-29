'use strict';

console.log('this is working')

let userName = prompt("What is your name?");

console.log(userName);


alert("Welcome, " + userName)

let maxGuesses = 3;
for (let i =1; i <= maxGuesses; i++){
    let answer = prompt("what is TokaBeans favorite color?");
    if (answer === "purple") {
        alert("You're correct!")
        console.log("you're correct");
        break;
    } else if (i < 3) {
        alert("Try again")
        console.log("try again");
    } else {
        alert("close, it is purple!")
        console.log("close, it is purple!")
    }
}

//let userInput1 = prompt ("What is TokaBeans favorite color?")
//if (userInput1 === "purple") {
//    alert("Great guess")
//} else  {
//    alert('try again')
//}



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


