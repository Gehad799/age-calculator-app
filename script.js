let btn = document.getElementById("submitButton");
function validate() {
    let day = document.getElementById("day");
    let dayErrorMessage = document.getElementById("dayErrorMessage");
    let month = document.getElementById("month");
    let monthErrorMessage = document.getElementById("monthErrorMessage");
    let year = document.getElementById("year");
    let yearErrorMessage = document.getElementById("yearErrorMessage");
    let labels = document.getElementsByTagName("label");

    // for required field
    if (day.value === "") {
        dayErrorMessage.textContent = "This field is required";
        day.style.borderColor = "hsl(0, 100%, 67%)";
        labels[0].style.color = "hsl(0, 100%, 67%)";
        return false

    }
    else {
        //day must be between 1 and 31
        if (day.value > 31 || day.value < 1) {
            dayErrorMessage.textContent = "Must be a valid day";
            day.style.borderColor = "hsl(0, 100%, 67%)";
            labels[0].style.color = "hsl(0, 100%, 67%)";
            return false

        }

    }
    if (isNaN(day.value)) {
        dayErrorMessage.textContent = "Must be a valid day";
        day.style.borderColor = "hsl(0, 100%, 67%)";
        labels[0].style.color = "hsl(0, 100%, 67%)";
        return false

    }


    // required field
    if (month.value === "") {
        monthErrorMessage.textContent = "This field is required";
        month.style.borderColor = "hsl(0, 100%, 67%)";
        labels[1].style.color = "hsl(0, 100%, 67%)";
        return false;
    }
    else {
        //month must be between 1 and 12
        if (month.value > 12 || month.value < 1) {
            monthErrorMessage.textContent = "Must be a valid month";
            month.style.borderColor = "hsl(0, 100%, 67%)";
            labels[1].style.color = "hsl(0, 100%, 67%)";
            return false;
        }
        // to concatenate 0 if the month is less than 10
        else {
            month.value = month.value.padStart(2, '0')
        }
    }
    if (isNaN(month.value)) {
        monthErrorMessage.textContent = "Must be a valid month";
        month.style.borderColor = "hsl(0, 100%, 67%)";
        labels[1].style.color = "hsl(0, 100%, 67%)";
        return false;
    }
    // required filed
    if (year.value === "") {
        yearErrorMessage.textContent = "This field is required";
        year.style.borderColor = "hsl(0, 100%, 67%)";
        labels[2].style.color = "hsl(0, 100%, 67%)";
        return false;
    }
    else {
        //year must be in the past
        let date = new Date();
        if (year.value > date.getFullYear()) {
            yearErrorMessage.textContent = "Must be in the past";
            year.style.borderColor = "hsl(0, 100%, 67%)";
            labels[2].style.color = "hsl(0, 100%, 67%)";
            return false;
        }
    }
    if (isNaN(year.value)) {
        yearErrorMessage.textContent = "Must be a valid year";
        year.style.borderColor = "hsl(0, 100%, 67%)";
        labels[2].style.color = "hsl(0, 100%, 67%)";
        return false;
    }
    // valid day according to month
    if (month.value === "2") {
        if (day.value > 29) {
            dayErrorMessage.textContent = "Must be a valid date ";
            day.style.borderColor = "hsl(0, 100%, 67%)";
            labels[0].style.color = "hsl(0, 100%, 67%)";
            return false;
        }
    }
    if (month.value === "4" || month.value === "6" || month.value === "9" || month.value === "11") {
        if (day.value > 30) {
            dayErrorMessage.textContent = "Must be a valid date ";
            day.style.borderColor = "hsl(0, 100%, 67%)";
            labels[0].style.color = "hsl(0, 100%, 67%)";
            return false;

        }
    }

    // calc age
    let date = new Date();
    let yearsSpan = document.getElementById("years");
    let monthsSpan = document.getElementById("months");
    let daysSpan = document.getElementById("days");

    let years = date.getFullYear() - year.value;
    let months = date.getMonth() - month.value;
    let days = date.getDate() - day.value;

    if (months < 0) {
        years = years - 1;
        months = months + 12;
    }

    if (days < 0) {
        days += getNoOfDays(year.value, month.value - 1);
    }




    function getNoOfDays(y, m) {
        return new Date(y, m, 0).getDate();
    }

    // display result
    // if (!isNaN(day.value) || !isNaN(month.value) || !isNaN(year.value)) {
    yearsSpan.textContent = years;
    monthsSpan.textContent = months;
    daysSpan.textContent = days;





}





