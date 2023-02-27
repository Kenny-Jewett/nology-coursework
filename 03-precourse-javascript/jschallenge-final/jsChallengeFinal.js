// 1. Write a function that takes a number and returns true if it is a positive number and false 
// if it is a negative number.
function isNumberPositive (number) {
    if (number >= 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

// ** Tests **
// isNumberPositive(0);
// isNumberPositive(1);
// isNumberPositive(-1);
// isNumberPositive(-5);

// 2. Write a function that takes a number of days and converts it into an age.
function convertDaysToAge (days) {
    const age = days / 365;
    console.log(`${days} days is ${Math.floor(age)} years old`);
}

// ** Tests **
// convertDaysToAge(365);
// convertDaysToAge(100000);
// convertDaysToAge(15000);
// convertDaysToAge(1000);
// convertDaysToAge(100);


// 3. Write a function that takes three numbers and returns the largest of the three numbers.
function getLargestNumber (first, second, third) {
    if ((first > second) && (first > third)) {
        console.log(`${first} is the largest number.`);
    } else if ((second > first) && (second > third)) {
        console.log(`${second} is the largest number.`);
    } else {
        console.log(`${third} is the largest number.`);
    }

}

// ** Tests **
// getLargestNumber(2 ,1, 4);
// getLargestNumber(6,2,3);
// getLargestNumber(9,2,4);
// getLargestNumber(1,2,3);
// getLargestNumber(9,9,9);



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

allNumbersPositive([2,4,5]); // returns true
allNumbersPositive([-5,4,6]); // returns false
allNumbersPositive([5,4,6]); // returns true
allNumbersPositive([-5,-4,-6]); // returns false
allNumbersPositive([5,-4,6]); // returns false
allNumbersPositive([0,4,6]); // returns true

