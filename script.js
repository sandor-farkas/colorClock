function colorClock() {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  
  var elmnt = document.getElementById('bottom');
  var clockWidth = elmnt.clientWidth;
  // console.log(clockWidth);
  var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  var hexColor = '#' + hours + minutes + seconds;
  
  if(seconds < 10) {
    seconds = '0' + seconds;
  } 
  if(minutes < 10) {
    minutes = '0' + minutes;
  }
  if(hours < 10) {
    hours = '0' + hours;
  }

  var persentage = (clockWidth * seconds) / 59;
  // console.log(persentage);
  
  document.getElementById('day').innerHTML = days[today.getDay()];
  document.getElementById('hour').innerHTML = hours;
  document.getElementById('minute').innerHTML = minutes;
  document.getElementById('second').innerHTML = seconds;
  document.body.style.background = hexColor;
  document.getElementById('time').style.width = persentage + "px";
  
  
  setTimeout(function() {
    colorClock();
  }, 1000);
  
  }
  
  colorClock();
  
  