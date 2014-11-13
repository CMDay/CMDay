// Ti.UI.backgroundColor = 'blue';

function openQuestionsWindow(e)
{
	var questions = Alloy.createController('questions');
    // questions.open();
}

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
	    
	    // Ti.API.info(alarm + "-< alarm ---- now minus 10: " + nowMinusTenMinutes);
	    // alert(alarm + "-< alarm ---- now minus 10: " + nowMinusTenMinutes);
	    
	    if (alarm > nowMinusTenMinutes && alarm < now)
	    {
	    	// alert('Je wekker is net afgegaan en opent de app met de notificatie');
	    	
	    	// Open de vragen
	    	var questions = Alloy.createController('questions');
	    }
    }
});

Ti.App.addEventListener('changeAlarmTime', function (e) {
	// set text van label met nieuwe tijd uit e object
	alert(e);
});


// win.addEventListener('resume', function() {
    // alert('reloaded app');
// });



// Ti.App.Properties.getString('cmdayalarm');



















// var picker = Ti.UI.createPicker({type:Ti.UI.PICKER_TYPE_TIME});
// picker.showDatePickerDialog({
    // //value: new Date(2010,8,1),
    // callback: function(e) {
        // if (e.cancel) {
            // Ti.API.info('user canceled dialog');
        // } else {
            // Ti.API.info('user selected date: ' + e.value);
        // }
    // }
// });

// picker.show();




// var picker = Ti.UI.createPicker({
  // type:Ti.UI.PICKER_TYPE_DATE,
  // minDate:new Date(2009,0,1),
  // maxDate:new Date(2014,11,31),
  // value:new Date(2014,3,12)
// });
// 
// picker.showDatePickerDialog({
  // value: new Date(2010,8,1),
  // callback: function(e) {
    // if (e.cancel) {
      // Ti.API.info('User canceled dialog');
    // } else {
      // Ti.API.info('User selected date: ' + e.value);
    // }
  // }
// });
// picker.show();

// win.add(picker);