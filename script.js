const newYears = "Jan 01 2023";
const Halloween = "Oct 31 2022";
const Easter = "Apr 17 2022";
const Xmas = "Dec 25 2022";

const body = document.body;
console.log(body);

const secondsEl = document.getElementById("seconds");
const minutesEl = document.getElementById("minutes");
const hoursEl = document.getElementById("hours");
const daysEl = document.getElementById("days");

const btnXmas = document.getElementById("Xmas");
const btnEaster = document.getElementById("Easter");
const btnHalloween = document.getElementById("Hall");

const textEvent = document.getElementById("feast");
let initialYear = new Date(newYears);


btnHalloween.addEventListener("click",function(){
    console.log(body.style.backgroundImage = "url(img/Halloween.jpg)")
    initialYear = new Date (Halloween); 
    textEvent.textContent = "Next Halloween Soon"
});

btnEaster.addEventListener("click",function(){
    console.log(body.style.backgroundImage = "url(img/easter.jpg)")
    initialYear = new Date (Easter); 
    textEvent.textContent = "Next Easter Soon"
});

btnXmas.addEventListener("click",function(){
    console.log(body.style.backgroundImage = "url(img/Xmas.jpg)")
    initialYear = new Date (Xmas); 
    textEvent.textContent = "Next Christmas Soon"
});

const coutdown = () => {
    const currentDate = new Date();

    let secondsAll =  (initialYear - currentDate) / 1000;
    let minutesAll = secondsAll / 60;
    let hoursAll = minutesAll /60;
    let days = Math.floor(hoursAll /24);
    // console.log(days);
    let seconds = Math.floor(secondsAll % 60);
    let minutes =Math.floor(minutesAll % 60);
    let hours =Math.floor(hoursAll % 24);

    secondsEl.textContent = formatTime(seconds);
    minutesEl.textContent = formatTime(minutes);
    hoursEl.textContent = formatTime(hours);
    daysEl.textContent = formatTime(days);
    
};


const formatTime = (time) => time < 10 ? `0${time}` : time; 
coutdown();
setInterval(coutdown,1000);