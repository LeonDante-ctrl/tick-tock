let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let currentYear = new Date().getFullYear();

const raceTrialDay = new Date(`December 25 2021 ${currentYear + 1} 00:00:00`);

function countDown() {
    const currentTime = new Date();
    const timeBetween = raceTrialDay - currentTime;

    const day = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
    const hour = Math.floor((timeBetween / (1000 * 60 * 60)) %24);
    const minute = Math.floor((timeBetween / 1000 / 60) % 60);
    const second = Math.floor((timeBetween / 1000) % 60);

days.innerHTML = day;
hours.innerHTML = hour < 10 ? "0" + hour : hour;
minutes.innerHTML = minute < 10 ? "0" + minute : minute;
seconds.innerHTML = second < 10 ? "0" + second : second;
}

setInterval(countDown, 1000);
