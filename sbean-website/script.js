function checkIfOpen() {
    var now = new Date();
    var day = now.getDay();
    var hour = now.getHours();
  
    var otime = 10;
    var ctime = 24;
    var msg = "we open at "+otime+"am";
    var until = "midnight";
  
    if (day >= 1 && day <= 4) ctime = 22, until = "10pm";
    if (hour >= otime && hour <= ctime) msg = "we are open until " + until;
  
    document.getElementById('areWeOpen').textContent = msg;
};