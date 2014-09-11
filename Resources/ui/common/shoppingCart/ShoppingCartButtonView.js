/**
 * @author sjoerdsprangers
 */
//MenuBar View Component Constructor
function ShoppingCartButtonView(total, productenArray) {
	
//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		borderColor: 'black',
		borderWidth: 1,
		backgroundColor:'white',
		height: '10%',
		bottom: 0,
		rowHeight:128
	});
	var tol = total;
	
	var totalLabel = Ti.UI.createLabel({
		text: 'totaal prijs: ' + total,
		left: '10%'
	});
	
	var checkoutButton = Ti.UI.createButton({
		title: 'checkout',
		left: '50%' 
	});
	
	
	
	checkoutButton.addEventListener('click', function(e){
		Titanium.API.log('you clicked the button');
		var AfrekenWindow = require('ui/common/shoppingCart/AfrekenWindow');
		var afrekenWindow = new AfrekenWindow(total, productenArray);
		
		afrekenWindow.open({modal:true,fullscreen:true});
	
	});
	self.add(totalLabel);
	self.add(checkoutButton);
	return self;
};

module.exports = ShoppingCartButtonView;