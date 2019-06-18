function calendar() {
  let FebNumberOfDays ="",
      counter = 1,
      dateNow = new Date(),
      month = dateNow.getMonth(),
      nextMonth = month+1,
      prevMonth = month -1,
      day = dateNow.getDate(),
      year = dateNow.getFullYear();
  
  //Determing if February (28,or 29)  
  if (month == 1){
     if ( (year%100!=0) && (year%4==0) || (year%400==0)){
       FebNumberOfDays = 29;
     }else{
       FebNumberOfDays = 28;
     }
  }
  
  let monthNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"],
      dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday", "Saturday"],
      dayPerMonth = ["31", ""+FebNumberOfDays+"","31","30","31","30","31","31","30","31","30","31"];
  
  let nextDate = new Date(nextMonth +' 1 ,'+year), 
      weekdays= nextDate.getDay(),
      numOfDays = dayPerMonth[month];
  let thisMonth = document.createElement('div'),
      daysContainer = document.querySelector('#daysContainer'),
      monthHeader = document.createElement('h1');
      monthHeader.innerHTML += `${monthNames[month]} ${year}`;


  let firstDayOfMon =  (new Date(year, month, 1)).getDay(),
      lastMonthLeftover = 0; 

  if (firstDayOfMon !== 1) {
    firstDayOfMon !== 0 ? lastMonthLeftover = (firstDayOfMon - 1): 
    lastMonthLeftover = 6;

    let countLastDays = dayPerMonth[prevMonth] - lastMonthLeftover;
    for (let i=0; i<lastMonthLeftover; i++) {
      let thisDay = `<div class='myDay notCurr'> ${countLastDays} </div>`;
      thisMonth.innerHTML += thisDay;
      countLastDays++;
      }
    }
  
  for (counter; counter<=numOfDays; counter++) {
    let thisDay = `<div class='myDay'> ${counter} </div>`;
    thisMonth.innerHTML += thisDay;
  }

  //if ((lastMonthLeftover + dayPerMonth[prevMonth])%7!==0) {
  //add nextMonthDays
  //  }
  document.querySelector('.monthHeader').appendChild(monthHeader);
  daysContainer.appendChild(thisMonth);
}

