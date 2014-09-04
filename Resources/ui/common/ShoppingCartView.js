/**
 * @author sjoerdsprangers
 */
//MenuBar View Component Constructor
function ShoppingCartView() {
	
//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'white',
		top: 88
	});
	
	var ShoppingCartTableView = require('ui/common/shoppingCart/ShoppingCartTableView');
	
	var shoppingCartTableView = new ShoppingCartTableView();
	
	self.add(ShoppingCartTableView);
	
	
	return self;
};

module.exports = ShoppingCartView;
