// Write a function that takes in an integer and returns array of all the numbers (from 1 to the integer). For multiples of three use the string “Fizz” instead of the number and for the multiples of five use the string “Buzz”. For numbers which are multiples of both three and five use the string “FizzBuzz”.

// Notes
// Make sure to return an array.

// Examples
// fizzBuzz(10) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]
// fizzBuzz(15) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]

function fizzBuzz(int){
    let arr = []
    for(let i=1; i<=int; i++) {
      if (i % 5 === 0 && i % 3 === 0) {
        arr.push("FizzBuzz")
      } else if (i % 5 === 0) {
        arr.push("Buzz")
      } else if (i % 3 === 0) {
        arr.push("Fizz")
      } else {
        arr.push(i)
      }
    }
    return arr
  }
  
  console.log(fizzBuzz(10))