var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function() {
  function update(){
    $('#time').text(moment().format('h:mm:ss a'));
  }

  setInterval(update, 1000);
  $("form#alarm").submit(function() {
    event.preventDefault();
    var setTime = $("input#setTime").val();
    var time = moment(setTime, "hh:mm a");
    var newAlarm = new Alarm(time);
    var alertAlarm = setInterval(function() {
      if(newAlarm.alarmTrigger()) {
        $('div#wakeUp').show();
        $('form#alarm').hide();
        clearInterval(alertAlarm);
      }
    }, 1000);
    $("#alarmTime").text(setTime);
  });
});
