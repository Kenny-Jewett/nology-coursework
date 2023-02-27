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

