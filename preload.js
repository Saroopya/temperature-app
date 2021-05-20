const si = require('systeminformation');
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  let getMachineTemperature = document.getElementById('get-cpu-temp');
  let cpuTemperature = document.getElementById('cpu-temp');
  getMachineTemperature.addEventListener('click', () => {
    si.cpuTemperature().then(data => {
      console.log("this is cpu temp", cpuTemperature.innerText, length);
      if (cpuTemperature.innerText.length == 0) {
        replaceText('cpu-temp', 'This is machine temperature: ' + data.max + '°C');
        replaceText('get-cpu-temp', 'Hide Machine Temperature');
      }
      else {
        replaceText('cpu-temp', '');
        replaceText('get-cpu-temp', 'Show Machine Temperature');
      }
    });
  });

  let getRommTemperature = document.getElementById('get-room-temp');
  let roomTemperature = document.getElementById('room-temp');
  getRommTemperature.addEventListener('click', () => {
    si.cpuTemperature().then(data => {
      console.log("this is cpu temp", roomTemperature.innerText, length);
      if (roomTemperature.innerText.length == 0) {
        fetch('http://api.openweathermap.org/data/2.5/weather?zip=508001,IN&units=metric&appid=67c5912b11106bcd044971b7e8397cf2')
          .then(response => response.json())
          .then(data =>
            replaceText('room-temp', 'This is room temperature: ' + data.main.temp + '°C')

          );

        replaceText('get-room-temp', 'Hide Room Temperature');
      }
      else {
        replaceText('room-temp', '');
        replaceText('get-room-temp', 'Show Room Temperature');
      }
    });
  });
})



