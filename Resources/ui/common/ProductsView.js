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
	
	var ProductTableView = require('ui/common/product/ProductTableView');
	
	var productTableView = new ProductTableView();
	
	self.add(productTableView);
	
	return self;
};

module.exports = ProductsView;
