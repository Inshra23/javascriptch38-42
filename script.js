// let a = 23
// let b = 45
// function sum(a, b){
//     return a + b
// }
// console.log(sum(a, b)); //global variable; excess from outside function and inside function


// function sum(x){
//     let x = 43
//     return x
// }
// console.log(sum(x)); //local variable


// function even(number) {
//     return number % 2 === 0
// }
// console.log(even(6));

// function even(number) {
//     return number % 2 === 0
// }
// console.log(even(7));


// switch statement    The switch statement is used to perform different actions based on different conditions
// let dayOfWeek = "Saturday"
// switch (dayOfWeek) {
//     case "Monday":
//         document.write("Today is Monday")
//         break
//     case "Tuesday":
//         document.write("Today is Tuesday")
//         break
//     case "Wednesday":
//         document.write("Today is Wednesday")
//         break
//     case "Thursday":
//         document.write("Today is Thursday")
//         break
//     case "Friday":
//         document.write("Today is Friday")
//         break
//     case "Saturday":
//         document.write("Today is Saturday")
//         break
//     case "Sunday":
//         document.write("Today is Sunday")
//         break

//     default:
//         document.write("Enter the correct Day")
// }

// let dayOfWk = 2
// switch (dayOfWk) {
//     case 1:
//         alert("Whoopee");
//         break;
//     case 2:
//         alert("Hello");
//         break;
//     case 3:
//         alert("TGIF!");
//         break;
//     default:
//         alert("Shoot me now!");
// }



// function getMonthName(Name) {
//     switch (Name) {
//         case 1:
//             return "January"

//         case 2:
//             return "February"

//         case 3:
//             return "March"

//         case 4:
//             return "April"
//         case 5:
//             return "May"
//         case 6:
//             return "June"
//         case 7:
//             return "July"
//         case 8:
//             return "August"
//         case 9:
//             return "September"
//         case 10:
//             return "October"
//         case 11:
//             return "November"
//         case 12:
//             return "December"

//             default :
//             console.log("Enter the correct month");

//     }
// }
// console.log(getMonthName(4));

///Write a function called calculateDiscount that takes two parameters: productType (a string indicating the type of product) and price (a number representing the original price of the product). The function should calculate and return the discounted price based on the following rules using a switch-case statement:

// If productType is "Electronics", apply a 10% discount.
// If productType is "Clothing", apply a 20% discount.

// If productType is "Books", apply a 15% discount.
// For any other productType, return the original price without any discount.
// Round the discounted price to two decimal places before returning it.

// function calculateDiscount(productType, price){
//     let discount = 0
//      switch(productType){
//         case productType = "Electronic":
//         discount = price * 0.01
//         break 

//         case productType = "Clothing":
//         discount = price * 0.2
//         break 

//         case productType = "Book":
//         discount = price * 0.15
//         break 

//         default :
//         console.log("Original Price");
//      }
//     let discountedPrice = (price - discount).toFixed(2)
//     return discountedPrice
// }
// console.log(calculateDiscount("Electronic", 80));
// console.log(calculateDiscount("Clothing", 350));
// console.log(calculateDiscount("Book", 120));



// while loop and for loop are same but there written style is different
// while loop
// let n = +prompt("Enter the value of n")
// let i = 0
// while(i< n){  //n = 13 i = 0
//     document.write("<br>"+i)
//     i++
// }

// for(i= 0; i >10; i++){    //for loop
//     console.log(i);
// }

// while loop question
// write a program to display sum of numbers from 1 to 100
// let sum = 0
// let num = 1
// while(num<=100){
//     sum += num // sum = sum + num  // 0 + 1 = 1, 3, 6, 10, 15
//     num++  // 1 (7)
// }
// document.write("<br>"+"Sum of 1 to 100:  "+ sum)

//write a program to display factorial of a number
// let number = 4
// let factorial = 1
// while(number<0){
//     factorial = factorial * number  //4,12,24
//     number-- //(1)
// }
// document.write("<br>"+"factorial of a number is:" + factorial)


//write a pragram to display finding the first 10 even number
// let evenNumber = []
// let i=1
// while(evenNumber.length<10){
//     if(i%2===0){
//         evenNumber.push(i)
//     }
//     i++
// }
//  document.write("<br>"+"the first 10 even number is: "+ evenNumber)

 // write a program to display user input validation
//  let userInput;
//  let password = "javascript123"
//  while(userInput!==password){
//     userInput = prompt("<br>"+"Enter your password")
//  }
//  document.write("Access Granted")


 // write a program to display generating countdown
//  let countdown = 10
//  while(countdown>=0){
//     document.write("<br>"+countdown)
//     countdown--
//  }
//  document.write("<br>"+"<h1>Happy New Year</h1>")

//do while
//  let n = +prompt("Enter the value of n")
// let i = 0
// do{  
//     document.write("<br>"+i)
//     i++
// }while(i<= n)

// write a program to display sum of numbers from 1 to 100
let sum = 0
let num = 1
do{
    sum += num // sum = sum + num  // 0 + 1 = 1, 3, 6, 10, 15
    num++  // 1 (7)
}while(num<=100)
document.write("<br>"+"Sum of 1 to 100:  "+ sum)

//write a program to display factorial of a number
let number = 4
let factorial = 1
do{
    factorial = factorial * number  //4,12,24
    number-- //(1)
}while(number<0)
document.write("<br>"+"factorial of a number is:" + factorial)

//write a pragram to display finding the first 10 even number
let evenNumber = []
let i=1
do{
    if(i%2===0){
        evenNumber.push(i)
    }
    i++
}while(evenNumber.length<10)
 document.write("<br>"+"the first 10 even number is: "+ evenNumber)


 //write a program to display user input validation
 let userInput;
 let password = "javascript123"
 do{
    userInput = prompt("<br>"+"Enter your password")
 }while(userInput!==password)
 document.write("Access Granted")


 // write a program to display generating countdown
 let countdown = 10
do{
    document.write("<br>"+countdown)
    countdown--
 } while(countdown>=0)
 document.write("<br>"+"<h1>Happy New Year</h1>")


