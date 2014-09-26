/**
 * @author sjoerdsprangers
 */
function ProductImageViewerView(){


	var arr = [
	{ID: 1, url:'ui/common/img/product/bureaustoel/detail/test1.png'},
	{ID: 2, url:'ui/common/img/product/bureaustoel/detail/test2.png'},
	{ID: 3, url:'ui/common/img/product/bureaustoel/detail/test3.png'},
	];
	
	var imgToView = arr[0];
	var placeOfPhoto = 0;
	var length = arr.length;
	var length = length - 1;
	var self = Ti.UI.createImageView({
		top: '0%',		
		bottom: '10%',
		image: imgToView.url
	});
	
	var button3D = Ti.UI.createButton({
		backgroundColor: 'black',
		title: '3D',
		top: '15%',
		right: '15%'
	});
	
		button3D.addEventListener('click', function(e){
			var _3DWindow = require('ui/common/product/productDetail/3D/3DWindow');
			var Window3D = new _3DWindow();
			Window3D.open();
		});
		
	Ti.API.addEventListener('infoBarSLIDEUP', function(e){
		button3D.setVisible(false);
	});
		
	Ti.API.addEventListener('infoBarSLIDEDOWN', function(e){
		button3D.setVisible(true);
	});	
	
	self.addEventListener('swipe', function(e){
		if(e.direction == 'left')
		{
			if( placeOfPhoto < length)
			{
				placeOfPhoto = placeOfPhoto + 1;
				imgToView = arr[placeOfPhoto];
			}
			else 
			{
				imgToView = arr[placeOfPhoto];
			}
		} else if(e.direction == 'right')
		{
			if (placeOfPhoto > 0)
			{
				placeOfPhoto = placeOfPhoto - 1;
				imgToView = arr[placeOfPhoto];
			} 
			else 
			{
				imgToView = arr[placeOfPhoto];
			}
		} else 
		{
			imgToView = arr[placeOfPhoto];	
		}
		self.setImage(imgToView.url);
	});
	
	self.add(button3D);
	return self;
	
}

module.exports = ProductImageViewerView;
