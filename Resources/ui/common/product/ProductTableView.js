/**
 * @author sjoerdsprangers
 */
//MenuBar View Component Constructor
function ProductTableView() {
	
//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createTableView({
		backgroundColor:'white',
		top: 0,
		rowHeight:128
	});
	
	return self;
};

module.exports = ProductTableView;