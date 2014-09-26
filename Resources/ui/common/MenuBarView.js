//MenuBar View Component Constructor
function MenuBarView() {
	//declare module dependencies
	var HomeView = require('ui/common/HomeView');
	var ProductsView = require('ui/common/ProductsView');
	var ProjectsView = require('ui/common/ProjectsView');
	var NewsView = require('ui/common/NewsView');
	var InfoView = require('ui/common/InfoView');
	var ShoppingCartView = require('ui/common/ShoppingCartView');
	var SettingsView = require('ui/common/SettingsView');
	
	//construct UI
	var homeView = new HomeView();
	var productsView = new ProductsView();
	var projectsView = new ProjectsView();
	var newsView = new NewsView();
	var infoView = new InfoView();
	var shoppingCartView = new ShoppingCartView();
	var settingsView = new SettingsView();
	 
	
	var questionEmpty = true;
	var shoppingEmpty = false;
	
	if (shoppingEmpty == true){
		var shoppingcartimg = 'ui/common/img/shoppingcart_empty.png';
	} else {
		var shoppingcartimg = 'ui/common/img/shoppingcart_full.png';
	}
	
	if (questionEmpty == true){
		var questioncartimg = 'ui/common/img/questioncart_empty.png';
	} else {
		var questioncartimg = 'ui/common/img/questioncart_full.png';
	}
	
	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'white',
	});
	
	//settings for font
	var customFont = 'Futura Lt';
	if(Ti.Platform.osname=='android'){
		customFont = 'Futura-Lt';
	}
	
	//create settings img
	var settings = Ti.UI.createImageView({
		backgroundImage: '/ui/common/img/singletandwiel.png',
		width: 20,
		height: 20,
		left: '0%'
	});
	
	//create shoppingcart img
	var shoppingcart = Ti.UI.createLabel({
		backgroundImage: shoppingcartimg,
		width: 20,
		height: 20,
		left: '33%'
	});
	//create Label label
	var label = Ti.UI.createLabel({
		text:'PLAN@OFFICE',
		color: '#ffffff',
		font: {fontFamily: customFont, fontSize: '25'},
	});
	
	//create QuestionCart img
	var questionCart = Ti.UI.createImageView({
		backgroundImage: questioncartimg,
		width: 20,
		height: 20,
		right: 0,
		left: '66%'
	});
	
	//create toolbar
	//button bar top
	var toolBar = Ti.UI.iOS.createToolbar({
		items:[label,settings,questionCart,shoppingcart],
		top:0,
		//left: '0%',
		//right: '0%',
		borderTop:false,
		borderBottom:false,
		barColor: 'Black',
		center: 0
		
	});
	
	
	
	//settings for position
	var theTop = 0;
	var theTopToolbar2 = 42;
	
	
	//creating second bar
	var home = Ti.UI.createLabel({
		text:'Home',
		color: '#ffffff',
		font: {
			fontFamily: customFont,
			fontSize: 15
			}
	});
	//create producten label
	var producten = Ti.UI.createLabel({
		text:'Producten',
		color: '#505050',
		font: {
			fontFamily: customFont,
			fontSize: 15},	
	});
	//create projecten label
	var projecten = Ti.UI.createLabel({
		text:'Projecten',
		color: '#505050',
		font: {
			fontFamily: customFont, fontSize: '15'},
	});
	//create news label
	var nieuws = Ti.UI.createLabel({
		text:'Nieuws',
		color: '#505050',
		font: {fontFamily: customFont, fontSize: '15'},
	});
	//create info label
	var info = Ti.UI.createLabel({
		text:'Info',
		color: '#505050',
		font: {fontFamily: customFont, fontSize: '15'},
	});
	//create toolbar2
	//button bar under
	var toolBar2 = Ti.UI.iOS.createToolbar({
		items:[home,producten,projecten,nieuws,info,],
		top:theTopToolbar2,
		left: '0%',
		right: '0%',
		bordertop:false,
		borderBottom:true,
		barColor: 'Black',
	});
	//eventlisteners for the labels
	//for Label - goes to home
	label.addEventListener('click', function(e){
		homeView.visible = true;
		newsView.visible = false;
		productsView.visible = false;
		projectsView.visible = false;
		infoView.visible = false;
		settingsView.visible = false;
		shoppingCartView.visible = false;
		home.color ='#ffffff';
		producten.color ='#505050';
		projecten.color ='#505050';
		nieuws.color ='#505050';
		info.color ='#505050';
				
	});
	
	//for settings - goes to settings
	settings.addEventListener('click', function(e){	
		homeView.visible = false;
		newsView.visible = false;
		productsView.visible = false;
		projectsView.visible = false;
		infoView.visible = false;
	//	settingsView.visible = true;
		shoppingCartView.visible = false;		
		settingsView.open({modal:true,modalTransitionStyle:Ti.UI.iPhone.MODAL_TRANSITION_STYLE_COVER_VERTICAL,modalStyle:Ti.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN,navBarHidden:true});
		home.color ='#505050';
		producten.color ='#505050';
		projecten.color ='#505050';
		nieuws.color ='#505050';
		info.color ='#505050';
	});
	//for shoppingcart - goes to shoppingcart
	shoppingcart.addEventListener('click', function(e){	
		homeView.visible = false;
		newsView.visible = false;
		productsView.visible = false;
		projectsView.visible = false;
		infoView.visible = false;
	//	settingsView.visible = false;
		shoppingCartView.visible = true;
		home.color ='#505050';
		producten.color ='#505050';
		projecten.color ='#505050';
		nieuws.color ='#505050';
		info.color ='#505050';
	});
	//for producten - goes to producten
	producten.addEventListener('click', function(e){
		//var productsView = new ProductsView();
		homeView.visible = false;
		newsView.visible = false;
		productsView.visible = true;
		projectsView.visible = false;
		infoView.visible = false;
	//	settingsView.visible = false;
		shoppingCartView.visible = false;
		Titanium.App.fireEvent('resetproducten', {name:'bar'});
		home.color ='#505050';
		producten.color ='#ffffff';
		projecten.color ='#505050';
		nieuws.color ='#505050';
		info.color ='#505050';
			
	});
	//for info - goes to info
	info.addEventListener('click', function(e){
		homeView.visible = false;
		newsView.visible = false;
		productsView.visible = false;
		projectsView.visible = false;
		infoView.visible = true;
	//	settingsView.visible = false;
		shoppingCartView.visible = false;
		home.color ='#505050';
		producten.color ='#505050';
		projecten.color ='#505050';
		nieuws.color ='#505050';
		info.color ='#ffffff';
	});
	//for news - goes to news
	nieuws.addEventListener('click', function(e){
		homeView.visible = false;
		newsView.visible = true;
		productsView.visible = false;
		projectsView.visible = false;
		infoView.visible = false;
	//	settingsView.visible = false;
		shoppingCartView.visible = false;
		home.color ='#505050';
		producten.color ='#505050';
		projecten.color ='#505050';
		nieuws.color ='#ffffff';
		info.color ='#505050';
	});
	//for projecten - goes to projecten
	projecten.addEventListener('click', function(e){
		homeView.visible = false;
		newsView.visible = false;
		productsView.visible = false;
		projectsView.visible = true;
		infoView.visible = false;
	//	settingsView.visible = false;
		shoppingCartView.visible = false;
		home.color ='#505050';
		producten.color ='#505050';
		projecten.color ='#ffffff';
		nieuws.color ='#505050';
		info.color ='#505050';
	});
	//for home - goes to home
	home.addEventListener('click', function(e){
		homeView.visible = true;
		newsView.visible = false;
		productsView.visible = false;
		projectsView.visible = false;
		infoView.visible = false;
	//	settingsView.visible = false;
		shoppingCartView.visible = false;
		home.color ='#ffffff';
		producten.color ='#505050';
		projecten.color ='#505050';
		nieuws.color ='#505050';
		info.color ='#505050';
	});
	//add toolbars to view
	
	

	self.add(settingsView);
	self.add(shoppingCartView);	
	self.add(productsView);
	self.add(infoView);
	self.add(newsView); 
	self.add(projectsView);
	self.add(homeView);
	self.add(toolBar);
	self.add(toolBar2);
	
	return self;
};

module.exports = MenuBarView;