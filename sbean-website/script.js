var dayOfWeek = (new Date).getDay();
var hours = ["SUN: 8 AM to 5 PM",    // Sunday
             "MON: 8 AM to 5 PM",   // Monday
             "TUE: 8 AM to 5 PM",   // Tuesday
             "WED: 8 AM to 5 PM",   // Wednesday
             "THUR: 8 AM to 5 PM",   // Thursday
             "FRI: 8 AM to 5 PM",   // Friday
             "SAT: 8 PM to 5 PM"];  // Saturday
var todaysHours = hours[dayOfWeek];
document.getElementById("hours").innerHTML = todaysHours;