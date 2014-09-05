/**
 * @author sjoerdsprangers
 */
//MenuBar View Component Constructor
function SettingsWindow() {
	
//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createWindow({
		backgroundColor:'white',
		top: 88
	});
	
	var customFont = 'Futura Lt';
	if(Ti.Platform.osname=='android'){
		customFont = 'Futura-Lt';
	}
	
	var emailLabel = Ti.UI.createLabel({
		text: 'Email: ',
		top: 10, 
		left: 50,
		font: {
			fontFamily: customFont,
			fontSize: 15}
	});
	
	var cancel = Titanium.UI.createButton({
    	systemButton : Titanium.UI.iPhone.SystemButton.CANCEL
	});
	
	var emailInput = Ti.UI.createTextField({
		  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		  color: '#336699',
		  top: 11, 
		  keyboardToolbar : [cancel],
		  left: 140,
		  width: 150, 
		  height: 20,
			font: {
			fontFamily: customFont,
			fontSize: 10}
	});
	
	var passwordLabel = Ti.UI.createLabel({
		text: 'Password: ',
		top: 45, 
		left: 50,
			font: {
			fontFamily: customFont,
			fontSize: 15}
	});
	
	var passwordInput = Ti.UI.createTextField({
		  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		  passwordMask: true,
		  color: '#336699',
		  top: 47, 
		  left: 140,
		  width: 150, 
		  height: 20,
			font: {
			fontFamily: customFont,
			fontSize: 10}
	});
	

	
	var buttonLogin = Titanium.UI.createButton({
	   title: 'Login',
	   top: 250,
	   width: 100,
	   left:75,
	   height: 50
	});
	/*
	var text1 = Ti.UI.createLabel({
		text: 'Login',
	});*/
	
	buttonLogin.addEventListener('click',function()
	{
	//	self.close();
		//var login = 
	});
	
	self.add(buttonLogin);
	self.add(emailLabel);
	self.add(emailInput);
	self.add(passwordLabel);
	self.add(passwordInput);
	
	return self;
};

module.exports = SettingsWindow;
