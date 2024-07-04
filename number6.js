function getAverageOfEvenNumbers(start, end) {
    var sum = 0;
    var count = 0;
    for (var i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sum += i;
            count++;
        }
    }
    return count === 0 ? 0 : sum / count;
}

function getAverageOfOddNumbers(start, end) {
    var sum = 0;
    var count = 0;
    for (var i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            sum += i;
            count++;
        }
    }
    return count === 0 ? 0 : sum / count;
}

var startNumber = parseInt(prompt("Enter the first number of the range:"));
var endNumber = parseInt(prompt("Enter the last number of the range:"));

var averageEven = getAverageOfEvenNumbers(startNumber, endNumber);
var averageOdd = getAverageOfOddNumbers(startNumber, endNumber);

console.log(`The average of all even numbers between ${startNumber} and ${endNumber} is: ${averageEven}`);
console.log(`The average of all odd numbers between ${startNumber} and ${endNumber} is: ${averageOdd}`);
