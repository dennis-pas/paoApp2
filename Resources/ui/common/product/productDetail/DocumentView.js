/**
 * @author sjoerdsprangers
 */
function DocumentView(){
	
	var self = Ti.UI.createView({
		height: '50%',
		top: '10%',
		backgroundColor: 'gray'
	});
	
	var imgView = Ti.UI.createImageView({
		image: 'ui/common/img/singetandwiel/png',
		height: '25%',
		width: '25%',
		center: 0
		
	});
	
	return self;
	
}

module.exports = DocumentView;
