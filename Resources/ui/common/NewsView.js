/**
 * @author sjoerdsprangers
 */
//MenuBar View Component Constructor
function NewsView() {
	
//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'white',
		top: 88
	});
	
	var text1 = Ti.UI.createLabel({
		text: 'test voor nieuws view',
	});
	
	self.add(text1);
	
	return self;
};

module.exports = NewsView;
