function calculateYearsUntilRetirement(event) {
    const currentAge = event.target.value;

    //Start code here ..
    const yearsLeft = 65 - currentAge;
    alert(yearsLeft)    
}

//Translate hello and goodbye into french for users
//if it is neither of these, alert `not regognized`

function getGreetingInFrench(event) {
    const greeting = event.target.value;
    if (greeting == "Hello") {
        alert("Bonjour")
    } else if (greeting == "Goodbye") {
        alert("au revoir")
    } else {
        alert(`Not recognized`)
    }
}