function ApplicationWindow() {
	//declare module dependencies
	var MenuBarView = require('ui/common/MenuBarView');

	//construct UI
	var menuBarView = new MenuBarView();

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
		window:menuBarContainerWindow
		
	});	
		
	return navGroup;
};


module.exports = ApplicationWindow;
