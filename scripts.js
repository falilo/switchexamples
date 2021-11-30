
console.log("Hello external JavaScript file ");

let dayInNumber = 1;

switch(dayInNumber){
    case 1:
        /* The code that should execute if
        dayInNumber matches 1.
        */
       console.log("Sunday");
       break;
    case 2:
        /* The code that should execute if
        dayInNumber matches 2.
        */
        console.log("Monday");
        break;
    case 3:
        /* The code that should execute if
        dayInNumber matches 3.
        */
        console.log("Tuesday");
        break;
    case 4:
        /* The code that should execute if
        dayInNumber matches 4.
        */
        console.log("Wednesday");
        break;
    case 5:
        /* The code that should execute if
        dayInNumber matches 5.
        */
        console.log("Thursday");
        break;
    case 6:
        /* The code that should execute if
        dayInNumber matches 6.
        */
        console.log("Friday");
        break;
    case 7:
        /* The code that should execute if
        dayInNumber matches 7.
        */
        console.log("Saturday");
        break;
    default:
        console.log("You provided a wrong number");

}

/* loop print an example of even number from 2 while loop */
/*
console.log("while loops examples");

let count = 2;
while(count <=  100000){
    console.log(count);
    count = count + 2
}

/* loop print an example of odd number from 3while loop */
/*
console.log("while loops examples");

let count = 3;
while(count <=  100000){
    console.log(count);
    count = count + 2
}
*/

/* while loop that compute a factorial of a number */

let count = 3
let factorial = 1;
while(count > 0){
    //console.log(count);
    factorial = factorial * count;
    count = count - 1;
}

console.log(factorial)

console.log("for loops examples");
/*
let i = 1;
for(i=1; i<=4; i++){
    console.log(i);
}
console.log("Done");
*/
/*
let i = 2;
for(i=2; i<=100000; i = i+2){
    console.log(i);
}
console.log("Done");
*/
/*
let i = 3;
for(i=3; i<=100000; i = i+2){
    console.log(i);
}
console.log("Done");


for(i = 3; i<=100000; i++){
if(i % 2 == 1){
    console.log(i)
    } 
}
*/
console.log("do-while loop example");

i = 1;
do{
    console.log(i);
    i++;

}while(i <= 4);
console.log("Done!");


function getDay(dayInNumber){
    var dayName = "";
    switch(dayInNumber){
        case 1:
            /* The code that should execute if
            dayInNumber matches 1.
            */
           console.log("Sunday");
           break;
        case 2:
            /* The code that should execute if
            dayInNumber matches 2.
            */
            console.log("Monday");
            break;
        case 3:
            /* The code that should execute if
            dayInNumber matches 3.
            */
            console.log("Tuesday");
            break;
        case 4:
            /* The code that should execute if
            dayInNumber matches 4.
            */
            console.log("Wednesday");
            break;
        case 5:
            /* The code that should execute if
            dayInNumber matches 5.
            */
            console.log("Thursday");
            break;
        case 6:
            /* The code that should execute if
            dayInNumber matches 6.
            */
            dayName = "Friday";
            break;
        case 7:
            /* The code that should execute if
            dayInNumber matches 7.
            */
            dayName = "Saturday";
            break;
        default:
            console.log("You provided a wrong number");
    
    }
}
/* do while loop that print the even numbers from 2 to 100 */
i = 2;
do{
    console.log(i);
    i = i + 2;

}while(i <= 100);
console.log("Done!");

/* do while that print odd numbers from 3 to 100 */
i = 3;
do{
    console.log(i);
    i = i + 2;

}while(i <= 100);
console.log("Done!");

