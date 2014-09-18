/**
 * @author sjoerdsprangers
 */
function ProductConfiguratorView(){

	var ConfiguratorView = require('ui/common/product/productDetail/ProductDetailConfiguratorView');
	
	var self = Ti.UI.createView({
		top: '90%',
		backgroundColor: 'purple'
	});
	var test = Ti.UI.createLabel({
		text: 'test voor window dinges in dit gele scherm'
	});
	
	self.add(test);
	
	self.addEventListener('swipe', function(e){
		if(e.direction == 'up')
		{
			
		}
	});
	return self;
	
}

module.exports = ProductConfiguratorView;
