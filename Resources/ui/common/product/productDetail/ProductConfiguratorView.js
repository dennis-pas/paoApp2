/**
 * @author sjoerdsprangers
 */
function ProductConfiguratorView(){
	
	//todo:
	//text voor omhoog en omlaag swipen goed zetten
	// var en adders goed op de juiste plek neerzetten voor mooie code + documentatie
	
	var self = Ti.UI.createView({
		height: '100%',
		top: '90%',
		backgroundColor: 'white',
		visible: false,
		opacity: 0.8
	});
	
	var colorLabel = Ti.UI.createLabel({
		text: 'Kleur',
		top: '10%',
		left: '5%'
	});
	
	var meshLabel = Ti.UI.createLabel({
		text: 'Mesh',
		top: '20%',
		left: '5%'
	});
	
	var sittingLabel = Ti.UI.createLabel({
		text: 'Zitting',
		top: '30%',
		left: '5%'
	});
	
	var colorField = Ti.UI.createTextField({
		top: '15%',
		left: '5%',
		width: '40%',
		height: '5%',
		editable: false,
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	
	var meshField = Ti.UI.createTextField({
		top: '25%',
		left: '5%',
		width: '40%',
		height: '5%',
		editable: false,
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	
	var sittingField = Ti.UI.createTextField({
		top: '35%',
		left: '5%',
		width: '40%',
		height: '5%',
		editable: false,
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	self.add(sittingLabel);
	self.add(colorLabel);
	self.add(meshLabel);
	self.add(colorField);
	self.add(meshField);
	self.add(sittingField);
	
	
	var optsColor =
	{
		
		options: ['blue', 'Red', 'Purple'],
		
		
		title: 'Choose color'	
	};
	
	var optsMesh =
	{
		
		options: ['No-Mesh', 'Normal', 'Leather'],
		title: 'Choose mesh'	
	};
	
	
	var optsSitting =
	{
		options: ['Short', 'Long', 'Mid'],
		title: 'Choose sitting'	
	};
	
	colorField.addEventListener('click', function(e){
		var dialog = Ti.UI.createOptionDialog(optsColor).show();
	});
	meshField.addEventListener('click', function(e){
		var dialog = Ti.UI.createOptionDialog(optsMesh).show();
	});
	sittingField.addEventListener('click', function(e){
		var dialog = Ti.UI.createOptionDialog(optsSitting).show();
	});
	
	var slideBarCon = Ti.UI.createView({
		height: '10%',
		top: '0%',
		bottom: '90%',
		backgroundColor: 'gray',
		
	});
	
	var status = 'down';
	var SliderText = Ti.UI.createLabel({
		text: 'swipe omhoog',
	});
	
	slideBarCon.add(SliderText);
	self.add(slideBarCon);
	
	Ti.API.addEventListener('infoBarSLIDEUP', function(e){
		self.setVisible(true);
	});
		
	Ti.API.addEventListener('infoBarSLIDEDOWN', function(e){
		self.setVisible(false);
	});	
	
	Ti.API.addEventListener('configBarSLIDEUP', function(e){
		self.setTop('0%');
	});
	
	Ti.API.addEventListener('configBarSLIDEDOWN', function(e){
		self.setTop('90%');
	});
	
	
	slideBarCon.addEventListener('swipe', function(e){
		if(e.direction == 'up')
		{
			Ti.API.fireEvent('configBarSLIDEUP');
			
		} else if(e.direction == 'down')
		{
			Ti.API.fireEvent('configBarSLIDEDOWN');
		}
		Ti.API.log('eerste view');
	});
	return self;
	
}

module.exports = ProductConfiguratorView;
