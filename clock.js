months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Novemeber",
    "December"
];

days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

function getStandardHours(militaryHours) {
    var result;
    if (militaryHours === 0) {
      result = 12;
    } else if (militaryHours > 12) {
      result = militaryHours - 12;
    } else {
      result = militaryHours;
    }
    return addLeadingZero(result);
}

function addLeadingZero(num) {
    var displayValue = num.toString();
    if (displayValue.length === 1) {
        return `0${displayValue}`;
    }
    return displayValue;
}

function addLeadingZeros(milliseconds) {
    var displayValue = milliseconds.toString();
    switch (displayValue.length) {
        case (1):
            return `00${displayValue}`;
        case (2):
            return `0${displayValue}`;
        default:
            return displayValue;
    }
}

function displayDateAndTime() {
    const dateDisplay = document.getElementById("date");
    const timeDisplay = document.getElementById("time");
    const currentDay = new Date();

    const month = months[currentDay.getMonth()];
    const daydate = addLeadingZero(currentDay.getDate());
    const weekDay = days[currentDay.getDay()];
    const year = currentDay.getFullYear();

    const militaryHours = currentDay.getHours();
    const standardHours = getStandardHours(militaryHours);
    const minute = addLeadingZero(currentDay.getMinutes());
    const second = addLeadingZero(currentDay.getSeconds());
    const miliseconds = addLeadingZeros(currentDay.getMilliseconds());
    const meridiem = militaryHours < 12 ? "AM" : "PM";

    dateDisplay.textContent = `${weekDay}, ${month} ${daydate}, ${year}`;
    timeDisplay.textContent = `${standardHours}:${minute}:${second}:${miliseconds} ${meridiem}`;
}


setInterval(displayDateAndTime);
displayDateAndTime();