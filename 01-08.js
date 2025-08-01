//Q.no.1 : WAP that takes an array of numbers and returns all the even numbers in the array.

let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}

console.log(evenNumbers);







//Q.no.2 : WAP t0 find the average from the an array i.e. masks = [30, 70, 80, 90, 88]

let masks = [30, 70, 80, 90, 88];
let sum = 0;
for (let i = 0; i < masks.length; i++) {
  sum = sum + masks[i];
  average = sum / masks.length;
}

console.log(`Total sum is ${sum}`);
console.log(`The average is ${average}`);







//WAP that uses a loop to print the multiplication table of any given number from 1 to 10.

let number =3; //we can change this number to get the multiplication table of any other number.
console.log(`Multiplication table of ${number}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}