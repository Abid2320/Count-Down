
let days = document.querySelector(".days-text")
let hours = document.querySelector(".hours-text")
let minutes = document.querySelector(".minutes-text")
let seconds = document.querySelector(".seconds-text")

let endDate = "jan 5, 2028 00:00:00";

let countDownDate = new Date(endDate).getTime();

let countDown = setInterval(()=>{
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let day = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  let second = Math.floor((distance % (1000 * 60)) / 1000)

  days.innerHTML = day;
  hours.innerHTML = hour;
  minutes.innerHTML = minute;
  seconds.innerHTML = second;

  if (distance < 0) {
    clearInterval(countDown)
    days.innerHtml = "day";
    hours.innerHTML = "hour";
    minutes.innerHTML = "minute";
    seconds.innerHTML = "";
  }

}, 1000)
