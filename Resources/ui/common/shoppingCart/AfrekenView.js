/**
 * @author sjoerdsprangers
 */
function AfrekenView(){
	
		
///create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'white',
		top: 0,
		height: '100%',
		width: '100%'
	});
	
	var text1 = Ti.UI.createLabel({
		text: 'test voor afreken view',
	});
	
	self.add(text1);
	
return self;
}

module.exports = AfrekenView;