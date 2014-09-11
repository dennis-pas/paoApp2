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
	
	
	var arr =	[	
				{ID: 1,imgurl: 'ui/common/img/product/CatergorieTest.png', text: 'BureauStoel', buyable: 1},
				{ID: 2,imgurl: 'ui/common/img/product/CatergorieTest.png', text: 'Banken',buyable: 1 },
				{ID: 3,imgurl: 'ui/common/img/product/CatergorieTest.png', text: 'Kasten',buyable: 1 },
				{ID: 4,imgurl: 'ui/common/img/product/CatergorieTest.png', text: 'School',buyable: 1 },
				{ID: 5,imgurl: 'ui/common/img/product/CatergorieTest.png', text: 'Overig',buyable: 1 },
				];

	for(var i = 0; i < arr.length; ++i){
		var thisObject = arr[i];
		var newRow = Ti.UI.createTableViewRow({
			selectedBackgroundColor:'white',
			height: 128,
			width: 256
		});
		
		var buyable = thisObject.buyable;
		if(buyable == 1){
			
		}
		
		
		var img = Ti.UI.createImageView({
			image: thisObject.imgurl
		});
		
		var imgBalk = Ti.UI.createImageView({
		image: 'ui/common/img/product/Balk.png',
		top: '40%',
		bottom: '40%'
	});
		
		var text = Ti.UI.createLabel({
			text: thisObject.text,
			right: '40%',
			top: '50%'
		});

		newRow.add(img),
		newRow.add(imgBalk),
		newRow.add(text),
		tableData.push(newRow);
		
	}
	var ProductTableView = require('ui/common/product/ProductTableView');
	
	var productTableView = new ProductTableView(tableData);
	
	self.add(productTableView);
	
	
	
	return self;
};

module.exports = ProductsView;
