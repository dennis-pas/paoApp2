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
				{ID: 2,imgurl: 'ui/common/img/product/CatergorieTest.png', text: 'Banken', catergorie: 'Banken' },
				{ID: 3,imgurl: 'ui/common/img/product/CatergorieTest.png', text: 'Kasten', catergorie: 'Kasten' },
				{ID: 4,imgurl: 'ui/common/img/product/CatergorieTest.png', text: 'School', catergorie: 'School' },
				{ID: 5,imgurl: 'ui/common/img/product/CatergorieTest.png', text: 'Overig', catergorie: 'Overig'},
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
		
		var buyable = this.thisObject.buyable;
		if(buyable == 1){
			
		}else{
			
		}
		
		newRow.cat = this.thisObject.catergorie;
		
		/*var img = Ti.UI.createImageView({
			image: this.thisObject.imgurl
		});*/
		
		var imgBalk = Ti.UI.createImageView({
		image: 'ui/common/img/product/Balk.png',
		top: '40%',
		bottom: '40%'
	});
		
		var text = Ti.UI.createLabel({
			text: this.thisObject.text,
			right: '40%',
			top: '50%'
		});
		
		newRow.addEventListener('click', function(e){
			var productsDataVar = require('ui/common/product/cat/'+ e.row.cat);
			var productsData = new productsDataVar();
			productsData.open();
			/*
			Producten["Listener_" + e.row.cat] = require('ui/common/product/cat/'+ e.row.cat);
			Producten["listener_" + e.row.cat] = new Producten["Listener" + e.row.cat]();
			Producten["listener_" + e.row.cat].open();*/
			/**
			 * var productsDataVar = require('Data/Products');
	var productsData = new productsDataVar();
			 */
		});

		//newRow.add(img),
		newRow.add(imgBalk),
		newRow.add(text),
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
