/**
 * @author sjoerdsprangers
 */
function ProductConfiguratorView(){

	var self = Ti.UI.createView({
		top: '90%',
		backgroundColor: 'purple'
	});
	var test = Ti.UI.createLabel({
		text: 'test voor window dinges in dit gele scherm'
	});
	
	self.add(test);
	
	
	return self;
	
}

module.exports = ProductConfiguratorView;
