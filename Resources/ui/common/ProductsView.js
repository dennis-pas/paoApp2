/**
 * @author sjoerdsprangers
 */

//MenuBar View Component Constructor
function ProductsView(){
	
	
	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'white',
		top: 88
	});
	
	var ProductListView = require('ui/common/product/productListView');
	
	var productListView = new ProductListView();
	
	self.add(productListView);
	
	
	
	return self;
};

module.exports = ProductsView;
