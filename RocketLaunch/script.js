var counter = document.getElementById("countdown");
var parsedDate;
setInterval(function(){
    var currentDate = new Date();
    var dateDiff = parsedDate - currentDate;
    var day = 1000 * 60 * 60 * 24;
    var hour = 1000 * 60 * 60;
    var minute = 1000 * 60;
    var output = "";
    
    output += "Days: " + Math.floor(dateDiff / day);
    dateDiff = dateDiff % day;
    output += " Hours: " + Math.floor(dateDiff / hour);
    dateDiff = dateDiff % hour;
    output += " Minutes: " + Math.floor(dateDiff / minute);
    dateDiff = dateDiff % minute;
    output += " Seconds: " + Math.floor(dateDiff / 1000);
    counter.innerHTML = output;
},1000)

function def(){
    setPage('https://launchlibrary.net/1.4/launch?next=5');
    document.getElementById('head').innerHTML = "Next 5 Launches"
}

function setPage (NextFiveURL){
    var listArr = document.getElementsByTagName('li');
    var next = document.getElementById('timer');
    $.getJSON(NextFiveURL, function(data){
        var date = data.launches[0].windowstart;

        parsedDate = new Date (Date.parse(date))
        var newParsedDate = parsedDate;
        newParsedDate = parsedDate.toLocaleDateString("en-US", {weekday: 'short', month: 'short', year: 'numeric', day: 'numeric'});
        next.innerHTML = "Next Launch: " + newParsedDate;
        for(var i = 0; i < listArr.length; i++){
            var launches = data.launches[i];
            if (launches != undefined) {
                listArr[i].innerHTML = "<strong> Rocket Type: </strong>" + launches.name + "<br>" + "<strong>Date/Time: </strong>" + launches.windowstart;
            }
            else{
                listArr[i].innerHTML = "";
            }
        }
    })
   
}
def();
//document.getElementById('nextfive').addEventListener("click", def);
document.getElementById('nextfive').addEventListener("click", def);
document.getElementById('nextfivefalcon').addEventListener("click", function(){
    setPage('https://launchlibrary.net/1.4/launch?name=falcon&next=5')
    document.getElementById('head').innerHTML = "Next 5 Falcon Launches"
});
document.getElementById('nextfiveariane').addEventListener("click", function(){
    setPage('https://launchlibrary.net/1.4/launch?name=ariane&next=5')
    document.getElementById('head').innerHTML = "Next 5 Ariane Launches"
});
document.getElementById('nextfivelauncherone').addEventListener("click", function(){
    setPage('https://launchlibrary.net/1.4/launch?name=launcherone&next=5')
    document.getElementById('head').innerHTML = "Next 5 LauncherOne Launches"
});






 
   
