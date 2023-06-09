const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway  = document.querySelector(".giveaway")
const deadline = document.querySelector(".deadline")
const items = document.querySelectorAll(".deadline-format  h4")


let futureDate = new Date(2023,3,2,5,30,0)


const year = futureDate.getFullYear()
const  hours = futureDate.getHours()
const  minutes = futureDate.getMinutes()
let month = futureDate.getMonth()

 month = months[month]
 const date = futureDate.getDate()
 const weekday = weekdays[futureDate.getDay()]


giveaway.textContent = `run for ahimsa on ${weekday},${month} ${year} ${hours}:${minutes}am`
//future time in ms
const futureTime = futureDate.getTime()
console.log(futureTime)

function getRemainingTime(){
  const today = new Date().getTime()
  const t = futureTime - today
  //console.log(t)
  //is = 1000ms
  //im = 60s
  //1hr = 60 min
//1day = 24hr
//values in ms
const oneDay = 24*60*60*1000
const oneHour = 60*60*1000
const oneMinute = 60*1000
//calcuklate all values 
let days = t/oneDay
//console.log(days)
days = Math.floor(days)
let hours = Math.floor(t%oneDay/oneHour)
let minutes = Math.floor((t%oneHour)/oneMinute)
let seconds = Math.floor((t%oneMinute)/1000)
//console.log(hours)
//set values array
const values = [days,hours,minutes,seconds]
function format(item){
  if(item < 10){
    return (item = `0 ${item}`)
  }return item
}


items.forEach((item,index)=>{
  item.innerHTML = values[index]
})
if(t<0){
  clearInterval(countdown)
  deadline.innerHTML = `<h4 class= "expired"> We ran the Ahimsa marathon and enjoyed!</h4>`
}
}
//cointdown 
let countdown = setInterval(getRemainingTime,1000)
getRemainingTime()
