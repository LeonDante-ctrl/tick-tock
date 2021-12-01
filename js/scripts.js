var newYear = new Date('Jan 1, 2022 00:00:00').getTime();

function counter(){
    var dateCurrent =  new Date().getTime(),
        timeLeft = newYear - dateCurrent;
     var second = 1000,
        minute  = second * 60,
        hour    = minute * 60,
        day     = hour * 24;
    var dayLeft     =  addZero(Math.floor(timeLeft/ day),),
        hourLeft    =  addZero(Math.floor((timeLeft % day)/ hour), 2),
        mintueLeft  =  addZero(Math.floor((timeLeft % hour)/minute), 2),
        secondLeft  =  addZero(Math.floor((timeLeft % minute)/ second), 2);


    function addZero (num, count) {
        return num.toString().padStart(count, "0");
    }

    document.getElementById("days").innerHTML = dayLeft;
    document.getElementById("hours").innerHTML = hourLeft;
    document.getElementById("minutes").innerHTML = mintueLeft;
    document.getElementById("seconds").innerHTML = secondLeft;

}

setInterval(() => {
    counter();
}, 1000);