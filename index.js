// Write a function that takes in an integer and returns array of all the numbers (from 1 to the integer). For multiples of three use the string “Fizz” instead of the number and for the multiples of five use the string “Buzz”. For numbers which are multiples of both three and five use the string “FizzBuzz”.

// Notes
// Make sure to return an array.

// Examples
// fizzBuzz(10) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]
// fizzBuzz(15) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]

//Applying UMPIRE

//Understand
// Case 1
// input: 3
// output: ["1","2","Fizz"] // 3 elements in the array, where every element that is a multiple of 3 will replace the array # with Fizz

// Case 2
// input: 5
// output: ["1","2","Fizz","4","Buzz"] // 5 elements in the array, where every element that is a multiple of 3 will replace the array # with Fizz and every element that is a multiple of 5 will replace the array # with Buzz

// Case 3
// input: 15
// output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"] // 15 elements in the array, where every element that is a multiple of 3 will replace the array # with Fizz, every element that is a multiple of 5 will replace the array # with Buzz, and every element that is a multiple of both 3 and 5 will replace the element # with FizzBuzz

// Case 4
// input: 4
// output: ["1","2","3","4"] // If n is not a multiple of 3, 5, or both, then our output will return an array of numbers as a string up to that input number

// Match
// Since there are bunch of cases, then I feel like this will use if, else if, and else statements
// I will also use the modulo operation, so that when divisible by 3, 5, or both, the remainder is 0

//Psuedocode

function FizzBuzz(n){
  let array = []
  for(let i=1; i<=n; i++) {
    if(i%3===0 && i%5===0){
      array.push("FizzBuzz")
    }
    else if (i%3==0){
      array.push("Fizz")
    }
    else if(i%5==0){
      array.push("Buzz")
    }
    else{
      array.push(`${i}`)
    }
  }
  return array
}

console.log(FizzBuzz(14))
