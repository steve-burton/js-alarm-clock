(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Alarm(time) {
  this.time = time;
}

Alarm.prototype.alarmTrigger = function() {
  if (this.time.format("HH:mm") === moment().format("HH:mm")) return true;
  else return false;
};

exports.alarmModule = Alarm;

},{}],2:[function(require,module,exports){
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

},{"./../js/alarm.js":1}]},{},[2]);
