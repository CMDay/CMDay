//Import our module into our Titanium App
var requestCode = 41;
var alarmModule = require('bencoding.alarmmanager');
var alarmManager = alarmModule.createAlarmManager();

var winTimePicker = $.timepicker;

function getMinutesBetweenDates(startDate, endDate) {
	var diff = endDate.getTime() - startDate.getTime();
	return (diff / 60000);
}

var timePickerValue = new Date();

function report(e) {
	timePickerValue = new Date(e.value);

	// Ti.API.info('User selected: ' + timePickerValue.getHours() + ':' + timePickerValue.getMinutes());
	// Ti.API.info('User selected: ' + timePickerValue);
}

var button = Titanium.UI.createButton({
	title : 'Zet alarm',
	bottom : 10
});
winTimePicker.add(button);

button.addEventListener('click', function(e) {
	var setTime = timePickerValue;
	// Ti.API.info('You clicked the button: ' + setTime.getHours() + ':' + setTime.getMinutes());

	var now = new Date();
	if (setTime < now) {
		var dateTomorrow = setTime.getDate() + 1;
		setTime.setDate(dateTomorrow);
	}

	// Ti.API.info('You clicked the button: ' + setTime);

	Ti.App.Properties.setString('cmdayalarm', setTime);
	Ti.App.Properties.setString('answeredquestion', 'false');

	var minutesBetweenDates = Math.round(getMinutesBetweenDates(now, setTime));

	// Set an Alarm
	alarmManager.addAlarmNotification({
		minute : minutesBetweenDates, //Set the number of minutes until the alarm should go off

		icon: '/cmdayappicon.png',
		playSound : true,
		// sound : '/alarm.wav',
		sound: Ti.Filesystem.getResRawDirectory() + 'alarm.wav', //Set a custom sound to play, located at: platform/android/res/raw/alarm.mp3

		contentTitle : 'Wakker worden!!!!',
		contentText : 'CMDay',
		vibrate : true,
		showLights : true
	});

	Ti.App.fireEvent('changeAlarmTime', { time : setTime });
	
	

	winTimePicker.close();
});
