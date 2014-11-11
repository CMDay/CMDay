function doClick(e) {
    alert($.label.text);
}

$.index.open();




//Import our module into our Titanium App
var requestCode = 41;
var alarmModule = require('bencoding.alarmmanager');
var alarmManager = alarmModule.createAlarmManager();

//Create a date variable to be used later 
var now = new Date();

function setAlarm(e) {
	//Set an Alarm to publish a notification in about two minutes
	alarmManager.addAlarmNotification({
	    // icon: Ti.App.Android.R.drawable.appicon, //Optional icon must be a resource id or url
	    icon: 'app/assets/android/appicon.png',
	    minute:2, //Set the number of minutes until the alarm should go off
	    contentTitle:'Alarm #2', //Set the title of the Notification that will appear
	    contentText:'Alarm & Notify Basic Repeat', //Set the body of the notification that will apear
	    vibrate: true,
	    showLights: true
	}); 
	var ew1 = Ti.UI.createAlertDialog({
	    title:'Info', message:"You should see your alarm notification in about 2 minutes & repeat each minute",
	    buttonNames:[Ti.Android.currentActivity.getString(Ti.Android.R.string.ok)]
	});
	ew1.show();
}

//Below is an example on how you can provide a full date to schedule your alarm
//Set an Alarm to publish a notification in about two minutes and repeat each minute
// alarmManager.addAlarmNotification({ 
    // requestCode:requestCode,    
    // year: now.getFullYear(),
    // month: now.getMonth(),
    // day: now.getDate(),
    // hour: now.getHours(),
    // minute: now.getMinutes() + 2, //Set the number of minutes until the alarm should go off
    // contentTitle:'Alarm #3', //Set the title of the Notification that will appear
    // contentText:'Alarm & Notify Scheduled', //Set the body of the notification that will apear
    // sound: Ti.Filesystem.getResRawDirectory() + 'alarm', //Set a custom sound to play, located at: platform/android/res/raw/alarm.mp3
    // repeat:60000 //You can use the words hourly,daily,weekly,monthly,yearly or you can provide milliseconds.
    // //Or as shown above you can provide the millesecond value   
// }); 
var ew2 = Ti.UI.createAlertDialog({
    title:'Info', message:"You should see your alarm notification in about 2 minutes",
    buttonNames:[Ti.Android.currentActivity.getString(Ti.Android.R.string.ok)]
});
// ew2.show();    
    
//Cancel our Notification based Alarms 
alarmManager.cancelAlarmNotification(requestCode);  
var ew9 = Ti.UI.createAlertDialog({
    title:'Info', message:"Your alarm notification has been cancelled",
    buttonNames:[Ti.Android.currentActivity.getString(Ti.Android.R.string.ok)]
});
//ew9.show(); 

//Schedule a service to be run (once) in about two minutes    
// alarmManager.addAlarmService({
    // //The full name for the service to be called. Find this in your AndroidManifest.xml Titanium creates
    // service:'com.appworkbench.alarmtest.TestserviceService',        
    // minute:2 //Set the number of minutes until the alarm should go off
// }); 
var ew5 = Ti.UI.createAlertDialog({
    title:'Info', message:"The Service provided will be started in about 2 minutes",
    buttonNames:[Ti.Android.currentActivity.getString(Ti.Android.R.string.ok)]
});
//ew5.show(); 

//Schedule a service to be run (once) in about two minutes, then to run at the same time each day
// alarmManager.addAlarmService({  
    // //The full name for the service to be called. Find this in your AndroidManifest.xml Titanium creates
    // service:'com.appworkbench.alarmtest.TestserviceService',            
    // year: now.getFullYear(),
    // month: now.getMonth(),
    // day: now.getDate(),
    // hour: now.getHours(),
    // minute: now.getMinutes() + 2, //Set the number of minutes until the alarm should go off
    // repeat:'daily' //You can use the words hourly,daily,weekly,monthly,yearly or you can provide milliseconds.
// }); 
var ew8 = Ti.UI.createAlertDialog({
    title:'Info', message:"You should see your alarm notification in about 2 minutes & repeat each day",
    buttonNames:[Ti.Android.currentActivity.getString(Ti.Android.R.string.ok)]
});
//ew8.show(); 

//alarmManager.cancelAlarmService();
var ew10 = Ti.UI.createAlertDialog({
    title:'Info', message:"Your alarm service has been cancelled",
    buttonNames:[Ti.Android.currentActivity.getString(Ti.Android.R.string.ok)]
});
//ew10.show();    