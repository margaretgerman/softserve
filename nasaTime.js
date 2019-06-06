function countdown(mili) {
let hh = 0, mm = 0, ss = 0, countDown = 0, result = '00:00:00';
(mili<0) ? countDown = true : countDown = false;
if (countDown === 0) return result;

let timeInSS = Math.abs(mili/1000);
hh = Math.floor(timeInSS/3600); 
mm = Math.floor((timeInSS - hh*3600)/60); 
ss = timeInSS % 60;

if (hh < 10) {hh = "0"+hh;}
if (mm < 10) {mm = "0"+mm;}
if (ss < 10) {ss = "0"+ss;}

result = `${hh}:${mm}:${ss}`;
(countDown == true) ? ( result='-'+result ): (result='+'+result );
return result;
}
