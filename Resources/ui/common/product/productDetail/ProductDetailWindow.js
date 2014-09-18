/**
 * @author sjoerdsprangers
 */
function ProductDetailWindow() {
	//declare module dependencies
	var ProductDetailView = require('ui/common/product/productDetail/ProductDetailView');
	var ProductDetailMenuView = require('ui/common/product/productDetail/ProductDetailMenuView');
	//construct UI
	var productDetailView = new ProductDetailView();
	var productDetailMenuView = new ProductDetailMenuView();

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
	self.add(productDetailMenuView);
	self.add(productDetailView);
		
	Ti.API.addEventListener('backButtonActive', function(e){
		self.close();
	});
	return self;
};


module.exports = ProductDetailWindow;
