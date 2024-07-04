let firstyear= parseInt(prompt("Enter the first year of the range:"));
let lastyear = parseInt(prompt("Enter the last year of the range:"));

var a=0;
for(i=firstyear; i<lastyear; i++){
    if((i%4==0 && i%100!=0) || (i%4==0 && i%400==0)){
        a++
    }
}
console.log("total  leap years   " +a);