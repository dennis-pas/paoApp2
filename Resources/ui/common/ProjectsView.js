/**
 * @author sjoerdsprangers
 */

//MenuBar View Component Constructor
function ProjectsView(){
	
	
	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'white',
		top: 88
	});
	
	
	var tableData = [];
	var total = 0;
	//var ProductTableView = require('ui/common/product/ProductTableView');
	
	var customFont = 'Futura Lt';
	if(Ti.Platform.osname=='android'){
		customFont = 'Futura-Lt';
	}
	
	var arr =	[	
				{ID: 1,imgurl: 'ui/common/img/Projects/James.jpg', text: 'Gert-Jan de Kaasboer'},
				{ID: 2,imgurl: 'ui/common/img/Projects/James.jpg', text: 'The SeatruckGroup'},
				{ID: 3,imgurl: 'ui/common/img/Projects/James.jpg', text: 'Unit PLAN@OFFICE'},
				{ID: 4,imgurl: 'ui/common/img/Projects/James.jpg', text: 'Fusie gemeente ABR Alphen aan den Rijn'},
				{ID: 5,imgurl: 'ui/common/img/Projects/James.jpg', text: 'ICC'},
				];
				
	var Producten = {};
	
	for(var i = 0; i < arr.length; ++i){
		this.thisObject = arr[i];
		var newRow = Ti.UI.createTableViewRow({
			backgroundImage: this.thisObject.imgurl,
			selectedBackgroundColor:'white',
			borderColor: 'white',
			height: 128,
			width: 256
		});
		
		
		newRow.cat = this.thisObject.catergorie;
		
		function ImgBalkImageView(thisObject){
			
			//create object instance, parasitic subclass of Observable
			var self = Ti.UI.createImageView({
				backgroundImage:'ui/common/img/product/Balk.png',
				right: '0%',
				top: '60%',
				height: '25%',
				width: '55%'
				
			});
			
			var text = Ti.UI.createLabel({
				left: '5%',
				height: '100%',
				width: '90%',
				font: {fontSize: 12, fontFamily: customFont},
				text: thisObject.text,
				
				
			});
			
			
			self.add(text);
				
			return self;
		};
		
		module.exports = ImgBalkImageView;
		
		var imgBalk = new ImgBalkImageView(this.thisObject);
		
		/*newRow.addEventListener('click', function(e){
			var productsDataVar = require('ui/common/product/cat/'+ e.row.cat);
			var productsData = new productsDataVar();
			self.add(productsData);
			//self.setVisible(false);
			//productsData.open();
		});
*/
		
		newRow.add(imgBalk),
		tableData.push(newRow);
		
	}
	var productTableView = Ti.UI.createTableView({
		data: tableData,
		backgroundColor:'white',
		separatorColor: 'white',
		top: 0,
		rowHeight:128
	});
	
	self.add(productTableView);
	
	
	
	return self;
};

module.exports = ProjectsView;
