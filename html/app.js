//1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// ans.var city = prompt("Enter your city name");
// if(city === "karachi"){
//     alert("Welcome to city of lights");
// }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// ans.2 // var gender = prompt ("Enter your gender (male or female):");
// if(gender === "male") {
//     alert("Good morning sir");
// }else if (gender === "female"){
//     alert("Good morning ma'am");
// }

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// ans3//   var color = prompt ("Enter traffic signal color (red, yellow, green):");
//   if (color ==="red"){
//     alert("Must stop");
//   }else if (color === "yellow"){
//     alert("Ready to move");
//   }else if (color === "green"){
//     alert("Move now")
//   }

// 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”

// ans4// let fuel = prompt("Enter remaining fuel in litres:");
//  if (fuel < 0.25) {
//       alert("Please refill the fuel in your car");
//     }

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// User Input & Conditional Statement | JAVASCRIPT

// Page 2 of 4

// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// User Input & Conditional Statement | JAVASCRIPT

// Page 3 of 4

// f. if("car" < "cat"){
// alert("car is smaller than cat");
// }

// var a = 4;
// if (++a === 5){
//   alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
//   alert("given condition for variable b is true");
// }

// var c = 12;

// if (c++ === 13){
//   alert("condition 1 is true");
// }
// if (c === 13){
//   alert("condition 2 is true");
// }
// if (++c < 14){
//   alert("condition 3 is true");
// }
// if (c === 14){
//   alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost){
//   alert("The cost equals");
// }

// if (true){
//   alert("True");
// }
// if (false){
//   alert("False");
// }
// if ("car" < "cat"){
//   alert("car is smaller than cat");
// }

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// ans 6//  var subject1 = prompt("Enter marks of Subject 1:");
//     var subject2 = prompt("Enter marks of Subject 2:");
//     var subject3 = prompt("Enter marks of Subject 3:");
//     var totalMarks = prompt("Enter total marks:");
//    var obtainedMarks = subject1 + subject2 + subject3;
//    var percentage = (obtainedMarks / totalMarks) * 100;
//         var grade = "";

//     if (percentage >= 80) {
//       grade = "A-one";
//     } else if (percentage >= 70) {
//       grade = "A";
//     } else if (percentage >= 60) {
//       grade = "B";
//     } else {
//       grade = "Fail";
//     }

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// ans 7
// let secretNumber = 7;
//  let userGuess = Number(prompt("Guess the secret number (1 to 10):"));
//     if (userGuess === secretNumber) {
//       alert("Bingo! Correct answer🎉");
//     } else if (userGuess + 5 === secretNumber) {
//       alert("Close enough to the correct answer🤐");
//     } else {
//       alert("Wrong guess, try again!😢");
//     }


// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// ans 8
//  let number = parseInt(prompt("Enter a number:"));
//    if (number % 3 === 0) {
//       alert("Number is divisible by 3");
//     } else {
//       alert("Number is NOT divisible by 3");
//     }

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// ans 9//  let number = parseInt(prompt("Enter a number:"));

//     if (number % 2 === 0) {
//       alert("The number is Even");
//     } else {
//       alert("The number is Odd");
//     }

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”    

// ans 10
//  let temp = parseInt(prompt("Enter the temperature:"));

//     if (temp > 40) {
//       alert("It is too hot outside.");
//     } else if (temp > 30) {
//       alert("The Weather today is Normal.");
//     } else if (temp > 20) {
//       alert("Today’s Weather is cool.");
//     } else if (temp > 10) {
//       alert("OMG! Today’s weather is so Cool.");
//     } else {
//       alert("It's very cold today.");
//     }
