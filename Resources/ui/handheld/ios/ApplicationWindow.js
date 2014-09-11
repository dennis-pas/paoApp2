function ApplicationWindow() {
	//declare module dependencies
	var MenuBarView = require('ui/common/MenuBarView');
	//var AfrekenView = require('ui/common/shoppingCart/AfrekenView.js');

	//construct UI
	var menuBarView = new MenuBarView();
	//var afrekenView = new AfrekenView();

	//create Menubarview container
	var menuBarContainerWindow = Ti.UI.createWindow({
		title:'PLAN@OFFICE',
		//stabBarHidden: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
		fullscreen: true
	});
	menuBarContainerWindow.hideNavBar();
	menuBarContainerWindow.add(menuBarView);
	
	//create iOS specific navGroupHome UI
	var navGroup = Ti.UI.iOS.createNavigationWindow({
		window:menuBarContainerWindow,
		//window:afrekenContainerWindow,
		
	});	
		
	return navGroup;
};


module.exports = ApplicationWindow;
