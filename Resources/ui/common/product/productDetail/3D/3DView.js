/**
 * @author sjoerdsprangers
 */
function ProductDetailView(){

	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'yellow',
		top: '10%',
	});

	var Wikitude = require('com.wikitude.ti');
		
	return self;
	
}

module.exports = ProductDetailView;
