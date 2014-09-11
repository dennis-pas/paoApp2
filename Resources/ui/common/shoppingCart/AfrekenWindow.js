/**
 * @author sjoerdsprangers
 */
function AfrekenWindow(total,productenArray) {
	//declare module dependencies
	//var AfrekenView = require('ui/common/shoppingCart/AfrekenView');

	//construct UI
	//var afrekenView = new AfrekenView(total,productenArray);
	
	//create Menubarview container
	var self = Ti.UI.createWindow({
		title:'Afreken',
		backgroundColor: 'white'
	});
	
	var priceLabel = Ti.UI.createLabel({
		top: '50%',
		text:'totaal: ' + total,
		
	});
	
	var textLabel = Ti.UI.createLabel({
		top: '35%',
		text: 'Dit is een betaal simulator druk om de betaal knop om door te gaan'
	});
	
	var nextButton = Ti.UI.createButton({
		title: 'volgende',
		top: '70%'
	});
	
	var DoneView = require('ui/common/shoppingCart/DoneView');
	
	function closeAfrekenWin(){
		self.close();
	}
	nextButton.addEventListener('click', function(e){
		var doneView = new DoneView();
		self.add(doneView);
		
		
	});
	
	Ti.App.addEventListener('winClose', function(data){
		var check = data.name;
		if(check == 'close'){
			self.close();
		}else{
			Ti.API.log('er is iets fout gegaan met het doorvoeren van de info');
		}
	});
	self.add(textLabel);
	self.add(priceLabel);
	self.add(nextButton);
	
	return self;	
};

module.exports = AfrekenWindow;
