/**
 * @author sjoerdsprangers
 */
function ProductDetailInfoView(){
	
	var DocumentView = require('ui/common/product/productDetail/DocumentView');
	
	var documentView = new DocumentView();
	
	var self = Ti.UI.createView({
		height: '100%',
		top: '90%',
		backgroundColor: 'white',
		opacity: 0.8
	});
	
	self.add(documentView);
	var test = Ti.UI.createLabel({
		text: 'Hier komt de informatie van het gekozen product'
	});
	
	var slideBar = Ti.UI.createView({
		height: '10%',
		top: '0%',
		bottom: '90%',
		backgroundColor: 'gray',
		opacity: 1,
		
	});
	
	var test2 = Ti.UI.createLabel({
		text: 'swipe omhoog',
	});
	
	self.add(test);
	slideBar.add(test2);
	self.add(slideBar);
	
	Ti.API.addEventListener('infoBarSLIDEUP', function(e){
		self.setTop('0%');
	});
		
	Ti.API.addEventListener('infoBarSLIDEDOWN', function(e){
		self.setTop('90%');
	});	
	
	Ti.API.addEventListener('configBarSLIDEUP', function(e){
		self.setVisible(false);
	});
	
	Ti.API.addEventListener('configBarSLIDEDOWN', function(e){
		self.setVisible(true);
	});
	
	slideBar.addEventListener('swipe', function(e){
		if(e.direction == 'up')
		{
			Ti.API.fireEvent('infoBarSLIDEUP');
			
		} else if(e.direction == 'down')
		{
			Ti.API.fireEvent('infoBarSLIDEDOWN');
		}
		Ti.API.log('eerste view');
	});
	return self;
	
}

module.exports = ProductDetailInfoView;
