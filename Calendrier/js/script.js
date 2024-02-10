
const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

const MonthAndYear = document.querySelector("h1");
const days = document.getElementById("days");
const prevNextIcon = document.querySelectorAll("section div span");

function calendar() {
  const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  const firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
  const lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();
  const lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
  let liTag = "";

  MonthAndYear.innerText = Months[currMonth] + ' ' + currYear;

  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class='inactive'>${lastDateOfLastMonth - i + 1}</li>`;
  }
  
  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday = (i === date.getDate() && currMonth === date.getMonth() && currYear === date.getFullYear()) ? "active" : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }
  
  for (let i = lastDayofMonth + 1; i < 7; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth}</li>`;
  }
  days.innerHTML = liTag;
}

calendar();

prevNextIcon.forEach(icon => {
  icon.addEventListener("click", () => {
    currMonth = (icon.id === "prev") ? currMonth - 1 : currMonth + 1;
    if(currMonth<0 || currMonth>11){
        date =new Date(currYear, currMonth);
        currYear=date.getFullYear();
        currMonth=date.getMonth();
    }else {
        date =new Date();
    }

    calendar();
  });
});
