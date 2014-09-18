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
	
	self.addEventListener('swipe', function(e){
		if(e.direction == 'right')
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
		} else if(e.direction == 'left')
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
		}else 
		{
			imgToView = arr[placeOfPhoto];	
		}
		self.setImage(imgToView.url);
	});
	
	
	return self;
	
}

module.exports = ProductImageViewerView;
