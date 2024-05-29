/*Write a JavaScript program to display the current day and time in the following format.
Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */
function Problem1() {
    let dte = new Date();
    let day = dte.getDay();
    let week = ['Sunday', 'Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    console.log("Today is : " + week[day]);

    let hours = dte.getHours();
    let minites = dte.getMinutes();
    let seconds = dte.getSeconds();

    let temp = "";
    if (hours > 12) {
        hours = hours - 12;
        temp += "PM"
    }
    else {
        temp += "AM";
    }

    console.log("Current Time : " + hours + " " + temp + " : " + minites + " : " + seconds);


}
//Call Function 
// Problem1(); 

//Write a JavaScript program to print the current window contents. 
function Problem2() {
    window.print();
}
// Problem2(); 


/*Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7. */

function Problem3(a , b , c ){


 let s = (a + b + c)/2  ; 
 let area = Math.sqrt(s*((s-a)*(s-b)*(s-c))); 
 console.log("Area of triangle is : " + area);

}
Problem3(5,6,7); 