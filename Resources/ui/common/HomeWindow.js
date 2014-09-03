/**
 * @author sjoerdsprangers
 */
function HomeWindow(title) {
	var self = Ti.UI.createView({
		title:title,
		backgroundColor:'white'
	});
	
var isMobileWeb = Titanium.Platform.osname == 'mobileweb';

//content


	return self;
};

module.exports = HomeWindow;