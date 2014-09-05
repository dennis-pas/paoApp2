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
	var totaal = 0;
	
	var arr =	[	
				{ID: 1,imgurl: 'ui/common/img/testbureaustoel.jpg', text: 'dit is vanuit de array1', prijs: 150},
				{ID: 2,imgurl: 'ui/common/img/testbureaustoel.jpg', text: 'dit is vanuit de array2', prijs: 200},
				{ID: 3,imgurl: 'ui/common/img/testbureaustoel.jpg', text: 'dit is vanuit de array3', prijs: 250},
				{ID: 4,imgurl: 'ui/common/img/testbureaustoel.jpg', text: 'dit is vanuit de array4', prijs: 100},
				{ID: 5,imgurl: 'ui/common/img/testbureaustoel.jpg', text: 'dit is vanuit de array5', prijs: 175},
				];

	for(var i = 0; i < arr.length; ++i){
		var thisObject = arr[i];
		var prijs = thisObject.prijs;
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
		
		
		var calc = thisObject.prijs;
		
		totaal = totaal + calc;
		
		var totaalprijs = Ti.UI.createLabel({
			text: totaal,
			left: 275
		});
		
		var prijs = Ti.UI.createLabel({
			text: L(thisObject.prijs),
			left: 225,
			
		});

		newRow.add(img),
		newRow.add(text),
		newRow.add(prijs),
		newRow.add(totaalprijs),
		tableData.push(newRow);
		
	}
	
		
	
	
	
	var ShoppingCartTableView = require('ui/common/shoppingCart/ShoppingCartTableView');
	var ShoppingCartButtonView = require('ui/common/shoppingCart/ShoppingCartButtonView');
	
	var shoppingCartTableView = new ShoppingCartTableView();
	var shoppingCartButtonView = new ShoppingCartButtonView();
	
	
	
	shoppingCartTableView = Ti.UI.createTableView({
			data: tableData
	});
	
	self.add(shoppingCartTableView);
	self.add(shoppingCartButtonView);
	
	return self;
};

module.exports = ShoppingCartView;
