//Master View Component Constructor
function MasterView() {
	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'black',
	});
	
	var customFont = 'Futura Lt';
	if(Ti.Platform.osname=='android'){
		customFont = 'Futura-Lt';
	}
	
	var label1 = Titanium.UI.createLabel({
		color: '#000',
		text: 'I am Window 1',
		font: {
			fontSize: 40,
			fontFamily: customFont,
		},
		textAlign:'center',
		width:'auto',
		top:theTopTable,
		backgroundColor: '#ffffff'
	});
	self.add(label1);
	
	var imgbutton_settings= Ti.UI.createButton({
		backgroundImage: '/ui/common/img/settings_icon.png',
		width: 50,
		height: 50,
	});
	
	var imgbutton_shoppingcart = Ti.UI.createButton({
		backgroundImage: '/ui/common/img/shoppingcart_icon.png',
		width:50,
		height: 50,
	});
	
	var label = Ti.UI.createButton({
		title:'PLAN@OFFICE',
		font: {fontfamily: customFont, fontSize: '15'},
	});
	
	var shoppingCart = Ti.UI.createButton({
		title:'shoppingCart'
	});
	
	var flexSpace = Ti.UI.createButton({
		title:'   ',
		
	});
	
	var theTop = 0;
	var theTopTable = 80;
	var theTopToolbar2 = 44;
	
	var toolBar = Ti.UI.iOS.createToolbar({
		items:[imgbutton_settings,flexSpace,label,flexSpace,imgbutton_shoppingcart,],
		top:theTop,
		borderTop:false,
		borderBottom:false,
		barColor: 'Black'
		
	});
	self.add(toolBar);
	
	var home = Ti.UI.createButton({
		title:'Home',
		backgroundImage: 'none',
		color: '#fff',
		font: {
			fontFamily: customFont,
			fontSize: 15
			}
	});
	
	var producten = Ti.UI.createButton({
		title:'Producten',
		font: {
			fontFamily: customFont,
			fontSize: 15},
	});
	
	var projecten = Ti.UI.createButton({
		title:'Projecten',
		font: {
			fontFamily: customFont, fontSize: '15'},
	});
	
	var nieuws = Ti.UI.createButton({
		title:'Nieuws',
		font: {fontFamily: customFont, fontSize: '15'},
	});
	
	var info = Ti.UI.createButton({
		title:'Info',
		font: {fontFamily: customFont, fontSize: '15'},
	});
	
	var toolBar2 = Ti.UI.iOS.createToolbar({
		items:[home,producten,projecten,nieuws,info,],
		top:theTopToolbar2,
		bordertop:false,
		borderBottom:true,
		barColor: 'Black',
		font: {fontFamily: customFont, fontSize: '15'},
	});
	self.add(toolBar2);

	//some dummy data for our table view
	/*var tableData = [
		{title:'Home', hasChild:true, color: '#000'},
		{title:'Producten', hasChild:true, color: '#000'},
		{title:'Projecten', hasChild:true, color: '#000'},
		{title:'Nieuws', hasChild:true, color: '#000'},
		{title:'Info', hasChild:true, color: '#000'},
	];

	var table = Ti.UI.createTableView({
		Top: theTopTable,
		data:tableData
	});
	self.add(table);
	//self.add(imageView);

	//add behavior
	table.addEventListener('click', function(e) {
		self.fireEvent('itemSelected', {
			name:e.rowData.title,
			price:e.rowData.price
		});
	});*/

	return self;
};

module.exports = MasterView;