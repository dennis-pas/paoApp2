/**
 * @author sjoerdsprangers
 */
function Bureaustoel(){
	
	var self = Ti.UI.createWindow({
		modal: true
	});
	
	var tableData = [];
	var total = 0;
	//var ProductTableView = require('ui/common/product/ProductTableView');
	

	
	var arr =	[	
				{ID: 1,imgurl: 'ui/common/img/product/bureaustoel/2k8.jpg', name: '2k8',buyable: 1},
				{ID: 2,imgurl: 'ui/common/img/product/bureaustoel/cuore.jpg', name: 'Cuore',buyable: 1, },
				{ID: 3,imgurl: 'ui/common/img/product/bureaustoel/eben.jpg', name: 'Eben',buyable: 1, },
				{ID: 4,imgurl: 'ui/common/img/product/bureaustoel/james.jpg', name: 'James',buyable: 1, },
				{ID: 5,imgurl: 'ui/common/img/product/bureaustoel/sentis.jpg', name: 'Sentis',buyable: 1, },
				{ID: 6,imgurl: 'ui/common/img/product/bureaustoel/visconte.jpg', name: 'Visconte',buyable: 0}
				];
	
	for(var i = 0; i < arr.length; ++i){
		this.thisObject = arr[i];
		var newRow = Ti.UI.createTableViewRow({
			backgroundImage: this.thisObject.imgurl,
			selectedBackgroundColor:'white',
			borderColor:'white',
			height: 128,
			width: 256
		});
		
		var buyable = this.thisObject.buyable;
		if(buyable == 1){
			
		}else{
			
		}
		
		newRow.name = this.thisObject.name;
		
		/*var img = Ti.UI.createImageView({
			image: this.thisObject.imgurl,
			left: 0,
			width: '100%',
			heigth: '50%',
		});*/
		
		var imgBalk = Ti.UI.createImageView({
		image: 'ui/common/img/product/Balk.png',
		top: '20%',
		bottom: '40%'
	});
		
		var text = Ti.UI.createLabel({
			text: this.thisObject.text,
			right: '40%',
			top: '50%'
		});
		
		newRow.addEventListener('click', function(e){
			var productsDataVar = require('ui/common/product/bureaustoel/'+ e.row.name);
			var productsData = new productsDataVar();
			productsData.open();
		});

		//newRow.add(img),
		newRow.add(imgBalk),
		newRow.add(text),
		tableData.push(newRow);
		
	}
	var productTableView = Ti.UI.createTableView({
		data: tableData,
		backgroundColor:'white',
		separatorColor:'white',
		top: 0,
		rowHeight:128
	});
	
	self.add(productTableView);
	
	/*var viewSelfie = Ti.UI.createView({
		top: 0,
		backgroundColor: 'white'
	});
	
	var text = Ti.UI.createLabel({text: 'Bureau', top: 20, left:30});
	viewSelfie.add(text);
	self.add(viewSelfie);*/
	
	return self;
};

module.exports = Bureaustoel;
