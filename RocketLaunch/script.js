var defaultNextFive = $.getJSON('https://launchlibrary.net/1.4/launch/next/5')
var listArr = document.getElementsByTagName('li');


document.onload = function (){
    var launchesArr = defaultNextFive.responseJSON.launches;
    console.log(launchesArr)
} 
   
