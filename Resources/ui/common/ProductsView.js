/**
 * @author sjoerdsprangers
 */

//MenuBar View Component Constructor
function ProductsView(){
	
	
	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'white',
		top: 88
	});
	
	
	var tableData = [];
	var total = 0;
	//var ProductTableView = require('ui/common/product/ProductTableView');
	

	
	var arr =	[	
				{ID: 1,imgurl: 'ui/common/img/product/James.jpg', text: 'BureauStoel', catergorie: 'Bureaustoel'},
				{ID: 2,imgurl: 'ui/common/img/product/James.jpg', text: 'Banken', catergorie: 'Banken' },
				{ID: 3,imgurl: 'ui/common/img/product/James.jpg', text: 'Kasten', catergorie: 'Kasten' },
				{ID: 4,imgurl: 'ui/common/img/product/James.jpg', text: 'School', catergorie: 'School' },
				{ID: 5,imgurl: 'ui/common/img/product/James.jpg', text: 'Overig', catergorie: 'Overig'},
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
				text: thisObject.text,
				
				
			});
			
			var BuyableFlag = Ti.UI.createImageView({
				image: 'ui/common/img/product/BuyableFlag.png',
				height: '100%',
				right: '-37%'
			});
			self.add(BuyableFlag);
			self.add(text);
				
			return self;
		};
		
		module.exports = ImgBalkImageView;
		var imgBalk = new ImgBalkImageView(this.thisObject);
		
		newRow.addEventListener('click', function(e){
			var productsDataVar = require('ui/common/product/cat/'+ e.row.cat);
			var productsData = new productsDataVar();
			self.add(productsData);
			//self.setVisible(false);
			//productsData.open();
		});

		
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

module.exports = ProductsView;
