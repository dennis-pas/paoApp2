/**
 * @author sjoerdsprangers
 */
function ProductDetailWindow() {
	//declare module dependencies
	var _3DView = require('ui/common/product/productDetail/3D/3DView');
	var _3DMenuView = require('ui/common/product/productDetail/3D/3DMenuView');
	//construct UI
	var _3dView = new _3DView();
	var _3dMenuView = new _3DMenuView();

	var self = Ti.UI.createWindow({
		backgroundColor: 'white',
		top: 0
	});
	
	//create Menubarview container
	/*var productDetailContainerWindow = Ti.UI.createWindow({
		title:'ProductDetail',
		//stabBarHidden: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
		fullscreen: true
	});*/
	self.hideNavBar();
	self.add(_3dView);
	self.add(_3dMenuView);
		
	Ti.API.addEventListener('backButtonActive3D', function(e){
		self.close();
	});
	return self;
};


module.exports = ProductDetailWindow;
