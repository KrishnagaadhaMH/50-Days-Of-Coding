// Calculate the Sum of Multiples
// Write a function sumOfMultiples(n, multiples) that takes two parameters:
// n: A positive integer that represents the upper limit.
// multiples: An array of positive integers representing the multiples.
// The function should calculate and return the sum of all the numbers less than n that are multiples of any number in the multiples array.

const n = prompt("Enter the limit:");
const multiples = prompt("Enter the multiples: ");

var sum =0;

function sumOfMultiples(n, mul){
    function multiple(num, multiples) {
        for (var m of multiples) {
          if (num % m === 0) {
            return true;
          }
        }
        return false;
      }
      for (var num = 0; num < n; num++) {
        if (multiple(num, multiples)) {
          sum += num;
        }
      }
    return sum;
}
console.log(sumOfMultiples(n,multiples))
