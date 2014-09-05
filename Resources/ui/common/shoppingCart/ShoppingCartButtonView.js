/**
 * @author sjoerdsprangers
 */
//MenuBar View Component Constructor
function ShoppingCartButtonView() {
	
//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'white',
		height: '10%',
		bottom: 0,
		rowHeight:128
	});
	
	var checkoutButton = Ti.UI.createButton({
		title: 'checkout',
		left: '50%' 
	});
	self.add(checkoutButton);
	return self;
};

module.exports = ShoppingCartButtonView;