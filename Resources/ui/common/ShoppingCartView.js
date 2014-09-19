/**
 * @author sjoerdsprangers
 */
//MenuBar View Component Constructor
function ShoppingCartView() {
	
//create object instance, parasitic subclass of Observable

	var self = Ti.UI.createView({
		backgroundColor:'white',
		top: 88
	}); 
	
	
	var tableData = [];
	var total = 0;
	
	var arr =	[	
				{ID: 1,imgurl: 'ui/common/img/testbureaustoel.jpg', text: 'Okamura CP', price: 680, quantity: 1},
				{ID: 2,imgurl: 'ui/common/img/testbureaustoel.jpg', text: 'Okamura Contessa', price: 930, quantity: 1},
				{ID: 3,imgurl: 'ui/common/img/testbureaustoel.jpg', text: 'Okamura Contessa', price: 1985, quantity: 1},
				{ID: 4,imgurl: 'ui/common/img/testbureaustoel.jpg', text: 'Okamura Luce', price: 465, quantity: 1},
				{ID: 5,imgurl: 'ui/common/img/testbureaustoel.jpg', text: 'Okamura Luce', price: 410, quantity: 1},
				];

	for(var i = 0; i < arr.length; ++i){
		var thisObject = arr[i];
		var price = thisObject.price;
		var newRow = Ti.UI.createTableViewRow({
			selectedBackgroundColor:'black'
		});
		
		var img = Ti.UI.createImageView({
			image: thisObject.imgurl,
			left: 10
		});
		
		var text = Ti.UI.createLabel({
			text: thisObject.text,
			left: 50
		});
		
		
		var calc = thisObject.price;
		
		total = total + calc;
		
		var totalprice = Ti.UI.createLabel({
			text: total,
			left: 275
		});
		
		var price = Ti.UI.createLabel({
			text: L(thisObject.price),
			left: 225,
			
		});

		newRow.add(img),
		newRow.add(text),
		newRow.add(price),
		tableData.push(newRow);
		
	}
	
		
	
	
	
	var ShoppingCartTableView = require('ui/common/shoppingCart/ShoppingCartTableView');
	var ShoppingCartButtonView = require('ui/common/shoppingCart/ShoppingCartButtonView');
	
	var shoppingCartTableView = new ShoppingCartTableView(tableData);
	var shoppingCartButtonView = new ShoppingCartButtonView(total);
	
	self.add(shoppingCartTableView);
	self.add(shoppingCartButtonView);
	
	return self;
};

module.exports = ShoppingCartView;
