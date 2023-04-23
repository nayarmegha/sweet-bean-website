var now = new Date();
var hours = now.getHours()

if (8 <= hours && hours < 17) {
    document.getElementById("businessHours").innerHTML = "We are currently open.";
} else {
    document.getElementById("businessHours").innerHTML = "We are currently closed.";
}