/**
 * @author sjoerdsprangers
 */
function ProductCatergorieView (catergorie) {
  //create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'white',
		top: 0,
		rowHeight:128
	});
	
	return self;
};

module.exports = ProductCatergorieView;
