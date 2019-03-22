let selectedTimezone;

// Main function of our program ... Can be considered the main function
function startTime() {
    selectedTimezone = isTimezoneChosen();
    var today = new Date();
    var h = today.getHours();
    h = checkTimezoneHour(h, selectedTimezone);
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkHour(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
    document.getElementById('current-timezone').innerHTML =
        "Current timezone: " + formatString();
    document.getElementById('current-area').innerHTML =
        "Current area of timezone: " + returnAreaOfTimezone();
    setBackgroundImage();
}

let formatString = function() {
    let string = '';
    switch(selectedTimezone) {
        case 0:
            string += 'UTC+1';
            return string;
        case 1:
            string += 'UTC+2';
            return string;
        case 2:
            string += 'UTC+3';
            return string;
        default:
            break;
    }
}

function isTimezoneChosen () {
    let TimezoneSelection = document.getElementById("selector-of-timezone");
    let chosenValue = TimezoneSelection.options[TimezoneSelection.selectedIndex].value;
    if (chosenValue == "0") {
        return 0;
    } else if (chosenValue == "1") {
        return 1;
    } else if (chosenValue == "2") {
        return 2;
    } 
    return 0;
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }  // add zero in front of numbers < 10
    return i;
}

function checkHour(h) {
    if (h >= 24 || h < 10) {
        h = "0" + h;
    }
    return h;
}

function checkTimezoneHour(hour, timezone) {
    if (timezone == 0) {
        if (hour > 0) {
            return hour - 1;
        } else {
            return hour + 23;
        }
    } else if (timezone == 1) {
        return hour;
    } else if (timezone == 2) {
        return hour + 1;
    }
}

function returnAreaOfTimezone() {
    let area = "Europe/";
    switch(selectedTimezone) {
        case 0:
            area += 'Paris';
            return area;
        case 1:
            area += 'Helsinki';
            return area;
        case 2:
            area += 'Moscow';
            return area;
        default:
            break;
    }
    return area;
}

function setBackgroundImage() {
    switch(selectedTimezone) {
        case 0:
            document.body.style.backgroundImage = "url('images/1.jpg')";
            break;
        case 1:
            document.body.style.backgroundImage = "url('images/2.jpg')";
            break;
        case 2:
            document.body.style.backgroundImage = "url('images/3.jpg')";
            break;
        default:
            break;
    }
}

// Loader function to start the program
window.addEventListener('load', () => {
    startTime();
});