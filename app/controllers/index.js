Ti.UI.backgroundColor = 'blue';

function openTimePickerWindow(e) 
{
    var timepicker = Alloy.createController('timepicker').getView();
    timepicker.open();
}

var win = $.index;
win.open();








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