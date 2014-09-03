function ApplicationWindow() {
	//declare module dependencies
	var MenuBarView = require('ui/common/MenuBarView');

	//construct UI
	var menubarView = new MenuBarView();

	//create Menubarview container
	var menuBarContainerWindow = Ti.UI.createWindow({
		title:'PLAN@OFFICE',
		//stabBarHidden: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
		fullscreen: true
	});
	menuBarContainerWindow.hideNavBar();
	menuBarContainerWindow.add(menuBarView);
	
	//creating the toolbar
	var customFont = 'Ftra-Bd';
	if(Ti.Platform.osname=='android'){
		customFont = 'Futura-Lt';
	}
	
	/*var imgbutton_settings= Ti.UI.createButton({
		backgroundImage: '/ui/common/img/settings_icon.png',
		width: 50,
		height: 50,
	});
	
	var imgbutton_shoppingcart = Ti.UI.createButton({
		backgroundImage: '/ui/common/img/shoppingcart_icon.png',
		width:50,
		height: 50,
		top: 20,
	});
	
	var label = Ti.UI.createButton({
		title:'PLAN@OFFICE',
		backgroundImage: 'none',
		color: '#ffffff',
		font: {fontfamily: customFont, fontSize: '25'},
	});
	
	label.addEventListener('click', function(e){
		//navGroupHome.open(MenuBarContainerWindow);
		//show( ) : void
		Titanium.API.info("you clicked the button");		
	});
	
	
		var toolBar = Ti.UI.iOS.createToolbar({
		items:[imgbutton_settings,label,imgbutton_shoppingcart,],
		top:0,
		borderTop:false,
		borderBottom:false,
		barColor: 'Black'
		
	});*/
	
	//setting some settings
	var theTop = 0;
	var theTopToolbar2 = 44;
	
	
	//creating second bar
	var home = Ti.UI.createButton({
		title:'Home',
		backgroundImage: 'none',
		color: '#fff',
		font: {
			fontFamily: customFont,
			fontSize: 15
			}
	});
	
	var producten = Ti.UI.createLabel({
		text:'Producten',
		color: '#ffffff',
		font: {
			fontFamily: customFont,
			fontSize: 15},
	});
	
	var projecten = Ti.UI.createLabel({
		text:'Projecten',
		color: '#ffffff',
		font: {
			fontFamily: customFont, fontSize: '15'},
	});
	
	var nieuws = Ti.UI.createLabel({
		text:'Nieuws',
		color: '#ffffff',
		font: {fontFamily: customFont, fontSize: '15'},
	});
	
	var info = Ti.UI.createLabel({
		text:'Info',
		color: '#ffffff',
		font: {fontFamily: customFont, fontSize: '15'},
	});
	
	var toolBar2 = Ti.UI.iOS.createToolbar({
		items:[home,producten,projecten,nieuws,info,],
		top:theTopToolbar2,
		bordertop:false,
		borderBottom:true,
		barColor: 'Black',
	});
	
	//menuBarContainerWindow.add(toolBar);
	menuBarContainerWindow.add(toolBar2);	

	//create iOS specific navGroupHome UI
	var navGroup = Ti.UI.iOS.createNavigationWindow({
		window:MenuBarContainerWindow
	});
		
	return navGroup;
};


module.exports = ApplicationWindow;
