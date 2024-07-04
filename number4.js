function SumOfEvenNumbers(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

let startNumber = parseInt(prompt("Enter the first number of the range:"));
let endNumber = parseInt(prompt("Enter the last number of the range:"));

let sum = SumOfEvenNumbers(startNumber, endNumber);

console.log(`The sum of all even numbers between ${startNumber} and ${endNumber} is: ${sum}`);
