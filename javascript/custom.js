function timer(){
    var timeDiv = document.getElementById("time");
    timeDiv.innerHTML = new Date();
    console.log(timeDiv.innerHTML);
    // document.getElementById("time").innerHTML ="Test time"; //new Date();
}
// timer();
setInterval(timer,1000);

