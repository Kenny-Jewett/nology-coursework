"use strict";

// If a name, is a coaches name, log "it's a coach"
var name = "Andy";

if (name == "Andy") {
  console.log("it's a coach");
} //If a greeting, is bonjour, log "comment ca va"


var greeting = "bonjour";

if (greeting == "bonjour") {
  console.log("comment ca va");
} //If a score, reaches ten, log "you won the game"


var score = 10;

if (score == 10) {
  console.log("you won the game");
} //If age, is greater than 65, "Time to retire"


var age = 65;

if (age >= 65) {
  console.log("Time to retire");
} //If someone had covid, or is shielding, log "time to isolate" else log "Keep social distancing"


var hasCovid = true;
var isShielding = false;

if (hasCovid || isShielding) {
  console.log("time to isolate");
} else {
  console.log("Keep social distancing");
} //If person is british and is over 17 log "Have you registered to vote?"


var isBritish = true;
age = 19;

if (age > 17 && isBritish) {
  console.log("Have you registered to vote?");
}