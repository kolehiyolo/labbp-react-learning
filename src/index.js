// var numbers = [3, 56, 2, 48, 5];

// * Map -Create a new array by doing something with each item in an array.

// function doubleMap(x) {
//   return x * 2;
// }
// const newNumbersMap = numbers.map(doubleMap);
// console.log(numbers.map(doubleMap)); 
// console.log(`newNumbersMap:`); 
// console.log(newNumbersMap);

// let newNumbersForEach = [];
// function doubleForEach(x) {
//   newNumbersForEach.push(x*2);
// }
// numbers.forEach(doubleForEach);
// console.log(`newNumbersForEach:`); 
// console.log(newNumbersForEach); 

// * Filter - Create a new array by keeping the items that return true.

// function findGreaterThanTen(num) {
//   return num > 10
// }
// const newNumbersFilter = numbers.filter(findGreaterThanTen);
// console.log(newNumbersFilter); 

// const newNumbersForEach = [];
// function findGreaterThanTen(num) {
//   if (num > 10) {
//     newNumbersForEach.push(num);
//   }
// }
// numbers.forEach(findGreaterThanTen);
// console.log(newNumbersForEach);

// * Reduce - Accumulate a value by doing something to each item in an array.

// let numbersSum = 0;
// function addNumToSum(num) {
//   numbersSum += num;
// };
// numbers.forEach(addNumToSum);
// console.log(numbersSum); 

// function addNumToSum(numbersSum, currentNum) {
//   return numbersSum + currentNum;
// };
// const numbersSum = numbers.reduce(addNumToSum);
// console.log(numbersSum); 

// * Find - find the first item that matches from an array.

// function findGreaterThanTen(num) {
//   return num > 10;
// }
// const answer = numbers.find(findGreaterThanTen);
// console.log(answer); 

// let answer = null;
// function findGreaterThanTen(num) {
//   if (num > 10 && answer === null) {
//     answer = num;
//   }
// }
// numbers.forEach(findGreaterThanTen);
// console.log(answer); 

// * FindIndex - find the index of the first item that matches.

// function findGreaterThanTen(num) {
//   return num > 10;
// }
// const answer = numbers.findIndex(findGreaterThanTen);
// console.log(answer); 

// console.log(numbers.find((num) => num > 10)); 

// let answer = null;
// function findGreaterThanTen(num, index) {
//   if (num > 10 && answer === null) {
//     answer = index;
//   }
// }
// numbers.forEach(findGreaterThanTen);
// console.log(answer); 

// * Challenge
// Import emojipedia
// Create a new array that just has the meaning text from each entry
// Each meaning text should be truncated so that it only has 100 characters
// Use substring()


