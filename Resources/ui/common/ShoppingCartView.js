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
	var totaal;
	
	var arr =	[	
				{ID: 1,imgurl: 'ui/common/img/testbureaustoel.jpg', text: 'dit is vanuit de array1', prijs: 150},
				{ID: 2,imgurl: 'ui/common/img/testbureaustoel.jpg', text: 'dit is vanuit de array2', prijs: 200},
				{ID: 3,imgurl: 'ui/common/img/testbureaustoel.jpg', text: 'dit is vanuit de array3', prijs: 250},
				{ID: 4,imgurl: 'ui/common/img/testbureaustoel.jpg', text: 'dit is vanuit de array4', prijs: 100},
				{ID: 5,imgurl: 'ui/common/img/testbureaustoel.jpg', text: 'dit is vanuit de array5', prijs: 175},
				];

	for(var i = 0; i < arr.length; ++i){
		thisObject = arr[i];
		
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
		
		
		/*var calc = parseInt.thisObject.prijs;
		
		totaal = totaal + calc;*/
		
		/*var totaalprijs = Ti.UI.createLabel({
			text: totaal,
			left: 275
		});*/
		
		var prijs = Ti.UI.createLabel({
			text: thisObject.prijs,
			left: 225,
			
		});

		newRow.add(img),
		newRow.add(text),
		newRow.add(prijs),
		//newRow.add(totaalprijs),
		tableData.push(newRow);
		
	}	
	
	
	
	var row1 = Ti.UI.createTableViewRow({
		selectedBackgroundColor: 'black'
	});
	
	var row2 = Ti.UI.createTableViewRow({
		selectedBackgroundColor: 'black'
	});
	
	var row3 = Ti.UI.createTableViewRow({
		selectedBackgroundColor: 'black'
	});
	
	var row4 = Ti.UI.createTableViewRow({
		selectedBackgroundColor: 'black'
	});
	
	var row5 = Ti.UI.createTableViewRow({
		selectedBackgroundColor: 'black'
	});
	
	var img1 = Ti.UI.createImageView({
		image: 'ui/common/img/testbureaustoel.jpg',
		left: 10
	});
	
	var label1 = Ti.UI.createLabel({
		text: 'dit is info van stoel 1',
		left: 200
	});
	
	var img2 = Ti.UI.createImageView({
		image: 'ui/common/img/testbureaustoel.jpg',
		left: 10
	});
	
	var label2 = Ti.UI.createLabel({
		text: 'dit is net wat andere info en van stoel 2',
		left: 200
	});
	
	var img3 = Ti.UI.createImageView({
		image: 'ui/common/img/testbureaustoel.jpg',
		left: 10
	});
	
	var label3 = Ti.UI.createLabel({
		text: 'stoel 3',
		left: 200
	});
	
	
	var img4 = Ti.UI.createImageView({
		image: 'ui/common/img/testbureaustoel.jpg',
		left: 10
	});
	
	var label4 = Ti.UI.createLabel({
		text: 'info van stoel 4',
		left: 200
	});
	
	
	var img5 = Ti.UI.createImageView({
		image: 'ui/common/img/testbureaustoel.jpg',
		left: 10
	});
	
	var label5 = Ti.UI.createLabel({
		text: 'hallo test',
		left: 200
	});
	
	row1.add(img1);
	row1.add(label1);
	row2.add(img2);
	row2.add(label2);
	row3.add(img3);
	row3.add(label3);
	row4.add(img4);
	row4.add(label4);
	row5.add(img5);
	row5.add(label5);

	//var tableData = [ row1, row2, row3, row4, row5 ];
	var ShoppingCartTableView = require('ui/common/shoppingCart/ShoppingCartTableView');
	
	var shoppingCartTableView = new ShoppingCartTableView();
	
	shoppingCartTableView = Ti.UI.createTableView({
			data: tableData
	});
	
	self.add(shoppingCartTableView);
	
	
	return self;
};

module.exports = ShoppingCartView;
