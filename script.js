var now = new Date(new Date().toLocaleString('en', {timeZone: 'America/New_York'}));
var hours = now.getHours()

if (8 <= hours && hours < 17) {
    document.getElementById("businessHours").innerHTML = "We are currently open.";
} else {
    document.getElementById("businessHours").innerHTML = "We are currently closed.";
}