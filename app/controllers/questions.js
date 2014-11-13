// Window
// var qWin = $.questions;
var qWin = Ti.UI.createWindow();
var self = Ti.UI.createView({top: 50});

    var tableView = Ti.UI.createTableView();
    self.add(tableView);
    var checkedRow =[];
    var _data = [];
    var _return = [];
    var checkBoxImageOn = [];
    var checkBoxImageOff = [];
    var caption = [];
	var questions = [
		{vraag: 'Wat is 5 plus 5?', antwoorden: [5, 8, 10, 12]},
		{vraag: 'Wat is 6 plus 6?', antwoorden: [5, 8, 12, 10]},
		{vraag: 'Wat is 8 plus 8?', antwoorden: [5, 8, 16, 10]},
		{vraag: 'Wat is 10 plus 10?', antwoorden: [5, 8, 20, 12]},
		{vraag: 'Wat is 12 plus 12?', antwoorden: [5, 8, 24, 12]},
	];
	var random = Math.round(Math.random(0, questions.length));
	var question = questions[random].vraag;
	var answers = questions[random].antwoorden;
	var answer;
    
    // Loop voor aanmaken vragen en antwoorden
    for(var i=0; i< answers.length; i++) {
        _return[i] = Ti.UI.createTableViewRow({
            height : 45,
            backgroundColor : '#FFF',
            id : i,
        });
 
        caption[i] = Ti.UI.createLabel({
            text : answers[i],
            font : {
                fontSize : 12,
                fontWeight : 'bold'
            },
            width : 270,
            touchEnabled : false,
            color : '#5a5a5a',
        });
        
        _return[i].add(caption[i]);
 
        checkBoxImageOff[i] = Ti.UI.createImageView({
            right : 10,
            id : i,
            name : 'checkOff',
            zIndex : 99,
            height : 20,
            width : 20,
            visible : true,
            touchEnabled : true,
            image : '/radio_btn_off.png' ,
        });
        _return[i].add(checkBoxImageOff[i]);
 
        checkBoxImageOn[i] = Ti.UI.createImageView({
            right : 10,
            id : i,
            name : 'checkOn',
            zIndex : 999,
            height : 20,
            width : 20,
            visible : false,
            touchEnabled : true,
            image : '/radio_btn_on1.png' ,
        });
        _return[i].add(checkBoxImageOn[i]);
 
        _return[i].addEventListener('click', function(e) {
            if (checkedRow.length == 0) {
                checkBoxImageOn[e.source.id].setVisible(true);
                checkBoxImageOff[e.source.id].setVisible(false);
                checkedRow.push(e.source.id);
            } else {
                var isID = checkedRow[0];
                checkBoxImageOn[isID].setVisible(false);
                checkBoxImageOff[isID].setVisible(true);
                checkedRow.splice(0, 1);
                checkBoxImageOn[e.source.id].setVisible(true);
                checkBoxImageOff[e.source.id].setVisible(false);
                checkedRow.push(e.source.id);
            }
        });
 
        _data.push(_return[i]);
    }
    tableView.data = _data;
    
    // Click event rows
	tableView.addEventListener('click', function(e) {
		var index = e.index;
		var row = e.row;
		var rowdata = e.rowData;
		
		button.backgroundColor = "green";
		answer = index + 1;
	});

	// Label
	var label = Ti.UI.createLabel({
	    text : question,
	    font : {
	        fontSize : 14,
	        fontWeight : 'bold'
	    },
	    left : 20,
	    top: 15,
	    width : 270,
	    touchEnabled : false,
	    color : '#fff',
	});

	// Button
	var button = Titanium.UI.createButton({
	   title: 'Beantwoord',
	   top: 260,
	   left: 20,
	   // width: 100,
	   // height: 30,
	   // backgroundColor: "#fff",
	   color: "#FFF",
	});
	
	// Geluidje als correct antwoord is gegeven
	var correct = Titanium.Media.createSound({
		url: '/correct.wav',
		preload: true
	});
	
	// Geluidje als fout antwoord is gegeven
	var fail = Titanium.Media.createSound({
		url: '/fail.mp3',
		preload: true
	});
	
	// Beantwoord button click event
	button.addEventListener('click', function() {
		if(answer) {
			if(answer == 3) {
				// Speel geluidje af
				correct.play();
				alert("Je hebt het goed beantwoord");
				
				qWin.close();
			} else {
				// Speel geluidje af
				fail.play();
				alert("Fout, je mag minder lang slapen");
			}
		} else {
			alert("Kies een antwoord!");
		}
	});
	
qWin.add(self);
qWin.add(label);
qWin.add(button);
qWin.open();