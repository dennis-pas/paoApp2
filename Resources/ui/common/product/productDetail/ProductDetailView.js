/**
 * @author sjoerdsprangers
 */
function ProductDetailView(){

	
	
	var ProductImageViewerView = require('ui/common/product/productDetail/ProductImageViewerView');
	//var ProductConfiguratorView = require('ui/common/product/productDetail/ProductConfiguratorView');
	
	var productImageViewerView = new ProductImageViewerView();
	//var productConfiguratorView = new ProductConfiguratorView();

	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'yellow',
		top: '10%',
	});
	
	
	//settings for font
	var customFont = 'Futura Lt';
	if(Ti.Platform.osname=='android'){
		customFont = 'Futura-Lt';
	}
	var test = Ti.UI.createLabel({
		text: 'test voor window dinges in dit gele scherm'
	});
	
	self.add(test);
	//self.add(productConfiguratorView);
	self.add(productImageViewerView);
	
	return self;
	
}

module.exports = ProductDetailView;
