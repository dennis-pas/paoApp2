/**
 * @author sjoerdsprangers
 */
var closeButton;

function DoneView(AfrekenWindow){
	
	var self = Ti.UI.createView({
		backgroundColor: 'white',
		top: 0,
		height: '100%',
		width: '100%'
	});
	
	var textLabel = Ti.UI.createLabel({
		text: 'u heeft betaald'
	});
	
	closeButton = Ti.UI.createButton({
		title: 'afsluiten',
		top: '50%',
	});
	
	closeButton.addEventListener('click', function(e){
		//AfrekenWindow.close();
		Ti.App.fireEvent('winClose', {name:'close'});
		//self.close();
	});
	self.add(textLabel);
	self.add(closeButton);
	
	return self;
};

/*DoneView.prototype.returnButton = function()
{
	Titanium.API.log('test return');
	return this.closeButton;
	
};*/

module.exports = DoneView;
