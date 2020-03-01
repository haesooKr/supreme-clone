const timeHTML = document.querySelector('#js-time');

function getCurrentTime(){
  let current = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
  let toArr = current.split(' ');
  let [month, date, year] = toArr[0].substr(0, toArr[0].length - 1).split('/');
  let [hour, minutes] = toArr[1].split(':');
  let mid = toArr[2].toLowerCase();
  
  [month, date, hour, minutes] = [month, date, hour, minutes].map(makeTwoDigits);
  
  let format = `${month}/${date}/${year} ${hour}:${minutes}${mid} NYC`
  timeHTML.innerText = format;
  setTimeout(getCurrentTime, 10000);
}

getCurrentTime();

function makeTwoDigits(num) {
  if(num.length < 2){
    return '0'+num;
  } else {
    return num;
  }
}
