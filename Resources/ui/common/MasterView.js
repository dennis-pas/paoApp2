//Master View Component Constructor
function MasterView() {
	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'black',
	});
	
	var customFont = 'Futura Lt';
	if(Ti.Platform.osname=='android'){
		customFont = 'Futura-Lt';
	}
	
	var label1 = Titanium.UI.createLabel({
		color: '#000',
		text: 'I am Window 1',
		font: {
			fontSize: 40,
			fontFamily: customFont,
		},
		textAlign:'center',
		width:'auto',
		top:theTopTable,
		backgroundColor: '#ffffff'
	});
	self.add(label1);
	
	return self;
};

module.exports = MasterView;