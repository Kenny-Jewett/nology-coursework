// 1. Write a function that takes a number and returns true if it is a positive number and false 
// if it is a negative number.
function isNumberPositive (number) {
    if (number >= 0) {
        return true;
    } else {
        return false;
    }
}
// ** Tests **
//  console.log(isNumberPositive(0)); // returns true
//  console.log(isNumberPositive(1)); //returns true
//  console.log(isNumberPositive(-1)); // returns false
//  console.log(isNumberPositive(-5)); // returns false

// 2. Write a function that takes a number of days and converts it into an age.
function convertDaysToAge (days) {
    const age = days / 365;
    return `${days} days is ${Math.floor(age)} years old`;
}

// ** Tests **
// console.log(convertDaysToAge(365)); // returns 1
// console.log(convertDaysToAge(100000)); // returns 273
// console.log(convertDaysToAge(15000)); // returns 41
// console.log(convertDaysToAge(1000)); // returns 2 
// console.log(convertDaysToAge(100)); // returns 0 


// 3. Write a function that takes three numbers and returns the largest of the three numbers.
function getLargestNumber (first, second, third) {
    if ((first > second) && (first > third)) {
        return `${first} is the largest number.`;
    } else if ((second > first) && (second > third)) {
        return `${second} is the largest number.`;
    } else {
        return `${third} is the largest number.`;
    }

}
// ** Tests **
console.log(getLargestNumber(2 ,1, 4)); // returns 4
console.log(getLargestNumber(6,2,3)); // returns 6
console.log(getLargestNumber(9,2,4)); // returns 9
console.log(getLargestNumber(1,2,3)); // returns 3
console.log(getLargestNumber(9,9,9)); // returns 9




// 4. Write a function that takes an array of names and returns the last name from the array of names.
function getLastName (arrayNames) {
    const lastName = arrayNames.length - 1;
    console.log(arrayNames[lastName]);
}

// ** Tests **
// getLastName(["Charlie", "Rob", "Andy"]); // returns “Andy”
// getLastName(["Ash","Stu"]); // returns "Stu"
// getLastName(["Ash","Stu", "Ben", "Travis"]); // returns "Travis"
// getLastName(["Ash","Stu", "Ben", "Travis", "Corey"]); // returns "Corey"


// 5. Write a function that takes an array of numbers and returns true if all of the numbers are 
// positive. It should return false if there are one or more negative numbers in the array.
function allNumbersPositive (arrayNumbers) {
    const isNegative = (element) => element < 0;
    console.log(!arrayNumbers.some(isNegative));
}

// ** Tests **
// allNumbersPositive([2,4,5]); // returns true
// allNumbersPositive([-5,4,6]); // returns false
// allNumbersPositive([5,4,6]); // returns true
// allNumbersPositive([-5,-4,-6]); // returns false
// allNumbersPositive([5,-4,6]); // returns false
// allNumbersPositive([0,4,6]); // returns true
