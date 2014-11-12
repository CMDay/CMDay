//Import our module into our Titanium App
var requestCode = 41;
var alarmModule = require('bencoding.alarmmanager');
var alarmManager = alarmModule.createAlarmManager();

var winTimePicker = $.timepicker;
// win.open();

function getMinutesBetweenDates(startDate, endDate) {
    var diff = endDate.getTime() - startDate.getTime();
    return (diff / 60000);
}

var timePickerValue = new Date();

function report(e) 
{
	timePickerValue = new Date(e.value);
	
    // Ti.API.info('User selected: ' + timePickerValue.getHours() + ':' + timePickerValue.getMinutes());
    // Ti.API.info('User selected: ' + timePickerValue);
}

var button = Titanium.UI.createButton(
{
   title: 'Zet alarm',
   bottom: 10,
   // width: 100,
   // height: 50
});
winTimePicker.add(button);

button.addEventListener('click',function(e)
{
	var setTime = timePickerValue;	
	// Ti.API.info('You clicked the button: ' + setTime.getHours() + ':' + setTime.getMinutes());
	
	var now = new Date();
	if(setTime < now)
	{
		var dateTomorrow = setTime.getDate() + 1;
		setTime.setDate(dateTomorrow);
	}
	
	// Ti.API.info('You clicked the button: ' + setTime);
	
	var minutesBetweenDates = Math.round(getMinutesBetweenDates(now, setTime));
	// Ti.API.info('Minuts between: ' + minutesBetweenDates);
   
	// Set an Alarm
	alarmManager.addAlarmNotification(
	{
	    minute: minutesBetweenDates, //Set the number of minutes until the alarm should go off
	    
	    // icon: 'app/assets/android/appicon.png',
	    contentTitle: 'Wakker worden!!!!',
	    contentText: 'Alarm & Notify Basic Repeat',
	    vibrate: true,
	    showLights: true
	});
	
	winTimePicker.close();
});
