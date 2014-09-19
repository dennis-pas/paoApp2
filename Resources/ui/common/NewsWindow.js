/**
 * @author sjoerdsprangers
 */
function NewsWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white'
	});
	
var isMobileWeb = Titanium.Platform.osname == 'mobileweb';

//content


	return self;
};

module.exports = NewsWindow;