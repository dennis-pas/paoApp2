/**
 * @author sjoerdsprangers
 */
function ProductDetailMenuView(){

	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'black',
		top: 0,
		bottom: '90%'
	});
	
	//settings for font
	var customFont = 'Futura Lt';
	if(Ti.Platform.osname=='android'){
		customFont = 'Futura-Lt';
	}
	
		//create Label label
	var label = Ti.UI.createLabel({
		text:'PLAN@OFFICE',
		color: '#ffffff',
		font: {fontFamily: customFont, fontSize: '25'},
		left: '40%'
	});
	
	var backButton = Ti.UI.createImageView({
		image: 'ui/common/img/backButton.png',
		height: 50,
		
		left: '5%'
		
	});
	
	backButton.addEventListener('click', function(e){
		Ti.API.log('pressed');
		Ti.API.fireEvent('backButtonActive3D');
	});
	

	//create toolbar
	//button bar top
	var toolBar = Ti.UI.iOS.createToolbar({
		items:[label, backButton],
		top:0,
		left: -10,
		borderTop:false,
		borderBottom:false,
		barColor: 'Black'
		
	});
	
	self.add(toolBar);
	
	return self;
	
}

module.exports = ProductDetailMenuView;
