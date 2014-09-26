/**
 * @author sjoerdsprangers
 */
function ProductDetailView(){

	
	
	var ProductImageViewerView = require('ui/common/product/productDetail/ProductImageViewerView');
<<<<<<< HEAD
	//var ProductConfiguratorView = require('ui/common/product/productDetail/ProductConfiguratorView');
	
	var productImageViewerView = new ProductImageViewerView();
	//var productConfiguratorView = new ProductConfiguratorView();

=======
	var ProductDetailInfoView = require('ui/common/product/productDetail/ProductDetailInfoView');
	var ProductConfiguratorView = require('ui/common/product/productDetail/ProductConfiguratorView');
	
	var productImageViewerView = new ProductImageViewerView();
	var productDetailInfoView = new ProductDetailInfoView();
	var productConfiguratorView = new ProductConfiguratorView();
	
	
>>>>>>> Sjoerd
	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'white',
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
<<<<<<< HEAD
	//self.add(productConfiguratorView);
=======
>>>>>>> Sjoerd
	self.add(productImageViewerView);
	self.add(productDetailInfoView);
	self.add(productConfiguratorView);
	
	Ti.API.addEventListener('infoBarSLIDEUP', function(e){
		
	});
		
	Ti.API.addEventListener('infoBarSLIDEDOWN', function(e){
		
	});	
	
	Ti.API.addEventListener('configBarSLIDEUP', function(e){
		
	});
	
	Ti.API.addEventListener('configBarSLIDEDOWN', function(e){
		
	});
	return self;
	
}

module.exports = ProductDetailView;
