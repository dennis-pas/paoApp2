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
		top: 30, 
		left: 50,
		font: {
			fontFamily: customFont,
			fontSize: 15}
	});
	
	var cancel = Titanium.UI.createButton({
    	systemButton : Titanium.UI.iPhone.SystemButton.DONE
	});
	
	var cancelEmail = Titanium.UI.createButton({
    	systemButton : Titanium.UI.iPhone.SystemButton.DONE
	});

	var emailInput = Ti.UI.createTextField({
		  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		  color: '#336699',
		  top: 31, 
		  keyboardToolbar : [cancelEmail],
		  left: 140,
		  width: 150, 
		  height: 20,
			font: {
			fontFamily: customFont,
			fontSize: 10}
	});
	
	var passwordLabel = Ti.UI.createLabel({
		text: 'Password: ',
		
		top: 65, 
		left: 50,
			font: {
			fontFamily: customFont,
			fontSize: 15}
	});
	
	var passwordInput = Ti.UI.createTextField({
		  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		  keyboardToolbar : [cancel],
		  passwordMask: true,
		  color: '#336699',
		  top: 67, 
		  left: 140,
		  width: 150, 
		  height: 20,
			font: {
			fontFamily: customFont,
			fontSize: 10}
	});
	

	
	var buttonLogin = Titanium.UI.createButton({
	   title: 'Login',
	   top: 270,
	   width: 100,
	   left:75,
	   height: 50
	});
	
	var loginMessageLabel = Ti.UI.createLabel({
		text: 'Voer hier je login gegevens in. ',
		top: 5, 
		left: 50,
			font: {
			fontFamily: customFont,
			fontSize: 15}
	});
	
	var buttonClose = Titanium.UI.createButton({
	   title: 'Close',
	   top: 270,
	   width: 100,
	   left:125,
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
		var isIos = Ti.Platform.osname = 'iPhone';
		var emailString = emailInput.value;
		var passwordString = passwordInput.value;		
		var urlCheck = "http://apishop.planatoffice.nl/UserLogin.aspx?email=" + emailString  +  "&password=" + passwordString;
		var urlCheck1Android = "http://apishop.planatoffice.nl/UserLogin.aspx?email=" + emailString;
		var urlCheck2Android = "&password=" + passwordString;
		var bool = false;
		var xhrCheck = Ti.Network.createHTTPClient({
			    onload: function(e) {
			        // this function is called when data is returned from the server and available for use
			        // this.responseText holds the raw text return of the message (used for text/JSON)
			        // this.responseXML holds any returned XML (including SOAP)
			        // this.responseData holds any returned binary data
			        //Ti.API.debug(this.responseXML);
			            // the blog's title is in a node named "channel"
			        if(isIos){
			        	xhrCheck.setRequestHeader("Content-Type", "application/xml");
			        } 
			        var xml = this.responseXML;
			        
				    var channel = xml.documentElement.getElementsByTagName("Users");
				 
				    // begin looping through blog posts
				 	var data = [];
				    // blog posts are in nodes named "item"
				    var items = xml.documentElement.getElementsByTagName("User");
				    bool = items.item(0).getElementsByTagName("Check").item(0).text;
				 	var test = "test";
				 	
					if(bool == "true")
					{
							var xhrPutIn = Ti.Network.createHTTPClient({
								    onload: function(e) {
								        // this function is called when data is returned from the server and available for use
								        // this.responseText holds the raw text return of the message (used for text/JSON)
								        // this.responseXML holds any returned XML (including SOAP)
								        // this.responseData holds any returned binary data
								        //Ti.API.debug(this.responseXML);
								            // the blog's title is in a node named "channel"
								        if(isIos){
								        	xhrCheck.setRequestHeader("Content-Type", "application/xml");
								        } 
								        var xml = this.responseXML;
								        
									    var channel = xml.documentElement.getElementsByTagName("Users");
									 
									    // begin looping through blog posts
									 	var data = [];
									    // blog posts are in nodes named "item"
									    var items = xml.documentElement.getElementsByTagName("User");
									    bool = items.item(0).getElementsByTagName("Check").item(0).text;
										var ID = items.item(0).getElementsByTagName("ID").item(0).text;
										var naam = items.item(0).getElementsByTagName("naam").item(0).text;
										var achternaam = items.item(0).getElementsByTagName("achternaam").item(0).text;
										var email = items.item(0).getElementsByTagName("email").item(0).text;
										
										
										var db = Ti.Database.open('SqlPaoApp');
										db.execute('INSERT INTO "User" (UID, Email, FirstName, LastName) VALUES(' + ID + ' ,"' + email + '","' + naam  + '", "' + achternaam +'");');
										db.close();
										
										loginMessageLabel.setText("Welkom " + email + ".");
								    	
										/*labelPassword.setVisible(false);
										inputBox.setVisible(false);
										inputBoxPassword.setVisible(false);
										loginButton.setVisible(false);
										labelFoutief.setVisible(false);
										loginButton2.setVisible(false);*/
										buttonLogin.setVisible(false);
										emailLabel.setVisible(false);
										emailInput.setVisible(false);
										passwordLabel.setVisible(false);
										passwordInput.setVisible(false);
										
										
										setTimeout(function () {
        									self.close();
										}, 1000);
										
										
										/*if(isAndroid)
										{
											var activity = Titanium.Android.currentActivity; 
											activity.finish();
										}*/
								    },
								    onerror: function(e) {
								        // this function is called when an error occurs, including a timeout
								        Ti.API.debug(e.error);
								        alert('Geen internet verbinding mogelijk.');
							    	},
							    	timeout:30000  /* in milliseconds */
								});
								if(isIos)
								{
									xhrPutIn.open("GET", urlCheck);
									xhrPutIn.send();									
								}/*else if(isAndroid)
								{
									xhrPutIn.open("GET", urlCheck1Android + urlCheck2Android);
									xhrPutIn.send();	
								}*/
						
					}else
					{
						loginMessageLabel.setText("Login foutief.");
					}
					
				 	
			      
			    },
			    onerror: function(e) {
			        // this function is called when an error occurs, including a timeout
			        Ti.API.debug(e.error);
			        alert('Geen internet verbinding mogelijk.');
		    	},
		    	timeout:30000  /* in milliseconds */
			});
		
		if(isIos)
		{
			xhrCheck.open("GET", urlCheck);
			xhrCheck.send();									
		}/*else if(isAndroid)
		{
			xhrCheck.open("GET", urlCheck1Android + urlCheck2Android);
			xhrCheck.send();	
		}*/
		  	//setTimeout(this.view.setTitle("test"), 5000);
	});
	
	cancel.addEventListener('click', function (e) {
	    passwordInput.blur();
	});
	
	cancelEmail.addEventListener('click', function (e) {
	    emailInput.blur();
	});
	
	buttonClose.addEventListener('click', function (e) {
	    self.close();
	});
	
	self.add(buttonLogin);
	self.add(emailLabel);
	self.add(emailInput);
	self.add(passwordLabel);
	self.add(passwordInput);
	self.add(loginMessageLabel);
	self.add(buttonClose);
	
	return self;
};

module.exports = SettingsWindow;
