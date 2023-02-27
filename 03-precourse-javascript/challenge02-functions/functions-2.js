// Write a function named getDescription that:
//Takes 4 arguments: number of numberOfChildren, partner's name, geographic location, job title.
//Outputs your statement to the console like so: 
// "I am currently a X living in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function getDescription (jobTitle, location, partnerName, numberOfChildren) {

    console.log(`I am currently a ${jobTitle} living in ${location}, and married 
    to ${partnerName} with ${numberOfChildren} kids.`);


}

getDescription(`Accountant`, `Texas`, `Sam`, `four`);
getDescription(`Teacher`, `Florida`, `Tim`, `1`);
getDescription(`Firefighter`, `Maine`, `John`, `two`);
getDescription(`Police officer`, `Arkansas`, `Boris`, `no`);


// **The Lifetime Supply of Snickers**

// Ever wonder how much a lifetime supply of Snickers would actually be? Wonder no more!

// Write a function named caculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of your life (based on a constant max age).
// outputs the result to the console like so: "You will need X to last you until the ripe 
// old age of Y"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and
// round the result to a round number.

function calculateSupply (age, amountPerDay) {
    const maxAge = 100;
    const calculateYears = maxAge - age;
    const totalAmount = (calculateYears * amountPerDay) * 365;
    console.log(`You will need ${totalAmount} Snickers to last you until the ripe old age of ${maxAge}`);

}

calculateSupply(50, 2);
calculateSupply(30, 3);
calculateSupply(80, 1);
calculateSupply(20, 5);


// **The Temperature Converter**
// Let's make a celsius/farenheit converter.

function celsiusToFarenheit (celsius) {
    const farenheit = (celsius * 9/5) + 32;
    console.log(farenheit);
}

celsiusToFarenheit(0);

// ** The Puppy Age Calculator **
// Calculate dog year from human years


function dogYears (humanYears) {
    const firstYear = 15;
    const secondYear = 9;
        
    if (humanYears > 2) {
       console.log((firstYear + secondYear) + ((humanYears - 2) * 5));
    } else if (humanYears == 1) {
        console.log(firstYear);
    } else {
        console.log(firstYear + secondYear);
    }

}

dogYears(3);
dogYears(2);
dogYears(1);
dogYears(5);
