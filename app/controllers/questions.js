// Window
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
		{vraag: 'Wat is de afkorting van HTML?', antwoorden: ['Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'Hyper Text Markup Language', 'Home Text Markup Language']},
		{vraag: 'Wie maakt de Web standaarden?', antwoorden: ['Microsoft', 'Mozilla', 'The World Wide Web Consortium', 'Google']},
		{vraag: 'Wat is de grootste heading tag?', antwoorden: ['<h6>', '<heading>', '<h1>', '<head>']},
		{vraag: 'Hoe kan je een e-mail link maken?', antwoorden: ['<mail>xxx@yyy</mail>', '<mail href="xxx@yyy">', '<a href="mailto:xxx@yyy">', '<a href="xxx@yyy">']},
		{vraag: 'Hoe kan je een genummerde lijst maken?', antwoorden: ['<list>', '<ul>', '<ol>', '<dl>']},
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
	   color: "#FFF"
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
	
	// Irritating looping sound
	var alarm = Titanium.Media.createSound({
		url: '/alarm.wav',
		preload: true,
		looping: true
	});
	
	// Beantwoord button click event
	button.addEventListener('click', function() {
		if(answer) {
			if(answer == 3) {
				alarm.stop();
				
				// Speel geluidje af
				correct.play();
				alert("Je hebt het goed beantwoord");
				
				Ti.App.Properties.setString('answeredquestion', 'true');
				
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

qWin.addEventListener('open', function (e) 
{
	alarm.play();
});