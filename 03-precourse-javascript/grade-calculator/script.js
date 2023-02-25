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