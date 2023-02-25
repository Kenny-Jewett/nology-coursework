function handleCalculateGrade(event) {
    const grade = event.target.value;
    if (!grade) {
        return;
    }
    let percentage;
    switch (grade.toUpperCase()) {
        case "A":
            percentage = "90-100%";
            break;
        case "B":
            percentage = "75-90%";
            break;
        case "C":
            percentage = "50-75%";
            break;
        case "D":
            percentage = "25-50%";
            break;
        case "E":
            percentage = "0-25%";
            break;
    }
    alert("The percentage was " + percentage);
}

function handlePositiveOrNegative(event) {
    const myNumber = event.target.value;
    if (!myNumber){
        return;
    }

    if (myNumber >= 0) {
        alert("You're number is positive.");
    } else {
        alert("You're number is negative.");
    }


}

function handleDaysUntilWeekend(event) {
    const daysUntilWeekend = event.target.value;
    if (!daysUntilWeekend) {
        return;
    }

    let daysLeft;
    switch (daysUntilWeekend) {
        case "Monday":
            daysLeft = "5 days until the weekend.";
            break;
        case "Tuesday":
            daysLeft = "4 days until the weekend.";
            break;
        case "Wednesday":
            daysLeft = "3 days until the weekend.";
            break;
        case "Thursday":
            daysLeft = "2 days until the weekend.";
            break;
        case "Friday":
            daysLeft = "1 day until the weekend.";
            break;
        case "Saturday":
            daysLeft = "It's the weekend!";
            break;
        case "Sunday":
            daysLeft = "It's the weekend!";
            break;
        default:
            daysLeft = "Sorry we didn't recognise that day."

    }

    alert(daysLeft);

}

