function openTimePickerWindow(e) 
{
    var timepicker = Alloy.createController('timepicker').getView();
    timepicker.open();
}

var win = $.index;
win.open();

win.addEventListener('open', function (e) 
{  
    if(Ti.App.Properties.getString('cmdayalarm') != "" || Ti.App.Properties.getString('cmdayalarm') != undefined)
    {
    	var now = new Date();
    	var nowMinusTenMinutes = new Date();
    	var newMinutes = nowMinusTenMinutes.getMinutes() - 3;
	    nowMinusTenMinutes.setMinutes(newMinutes);
	    
	    var alarm = new Date(Ti.App.Properties.getString('cmdayalarm'));
	    
	    // Zet oude tijd in de view
		$.wekkerTijd.text = alarm.getHours() + ':' + alarm.getMinutes();
	    
	    if ((alarm > nowMinusTenMinutes && alarm < now) && Ti.App.Properties.getString('answeredquestion') == 'false')
	    {
	    	// Je wekker is net afgegaan en opent de app met de notificatie
	    	// Open de vragen
	    	var questions = Alloy.createController('questions');
	    }
    }
});

Ti.App.addEventListener('changeAlarmTime', function (e) 
{
	var wekkerTijd = new Date(e.time);
	$.wekkerTijd.text = wekkerTijd.getHours() + ':' + wekkerTijd.getMinutes();
});