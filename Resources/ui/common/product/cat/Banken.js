/**
 * @author sjoerdsprangers
 */
function Banken(){
	
	var self = Ti.UI.createWindow({
		modal: true
	});
	
	var viewSelfie = Ti.UI.createView({
		top: 0,
		backgroundColor: 'white'
	});
	
	var text = Ti.UI.createLabel({text: 'Banken', top: 20, left:30});
	viewSelfie.add(text);
	self.add(viewSelfie);
	
	return self;
};

module.exports = Banken;
