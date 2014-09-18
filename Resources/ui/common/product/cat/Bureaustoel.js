/**
 * @author sjoerdsprangers
 */
function Bureaustoel(){
	
	var self = Ti.UI.createView({
		modal: true,
		
	});
	
	var tableData = [];
	var total = 0;
	//var ProductTableView = require('ui/common/product/ProductTableView');
	

	
	var arr =	[	
				{ID: 1,imgurl: 'ui/common/img/product/bureaustoel/2k8.jpg', name: '2k8', buyable: 1},
				{ID: 2,imgurl: 'ui/common/img/product/bureaustoel/cuore.jpg', name: 'Cuore', buyable: 1, },
				{ID: 3,imgurl: 'ui/common/img/product/bureaustoel/eben.jpg', name: 'Eben', buyable: 1, },
				{ID: 4,imgurl: 'ui/common/img/product/bureaustoel/james.jpg', name: 'James', buyable: 1, },
				{ID: 5,imgurl: 'ui/common/img/product/bureaustoel/sentis.jpg', name: 'Sentis', buyable: 1, },
				{ID: 6,imgurl: 'ui/common/img/product/bureaustoel/visconte.jpg', name: 'Visconte', buyable: 0}
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
		
		newRow.name = this.thisObject.name;
		
		function ImgBalkImageView(thisObject){
			
			//create object instance, parasitic subclass of Observable
			var self = Ti.UI.createImageView({
				backgroundImage:'ui/common/img/product/Balk.png',
				right: '0%',
				top: '60%',
				height: '25%',
				width: '55%'
				
			});
			
			var name = Ti.UI.createLabel({
				name: thisObject.name,
				
				
			});
			var buyable = thisObject.buyable;
			if(buyable == 1)
			{		
			var BuyableFlag = Ti.UI.createImageView({
				image: 'ui/common/img/product/BuyableFlag.png',
				height: '100%',
				right: '-37%'
			});
			}else{
				var BuyableFlag = Ti.UI.createImageView({
					image: 'none'
				});
			}
			self.add(BuyableFlag);
			self.add(name);
				
			return self;
		};
		
		module.exports = ImgBalkImageView;
		var imgBalk = new ImgBalkImageView(this.thisObject);
		
		newRow.addEventListener('click', function(e){
			var productsDataVar = require('ui/common/product/productDetail/ProductDetailWindow');
			var productsData = new productsDataVar();
			productsData.open();
		});

		
		newRow.add(imgBalk),
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
	
	Ti.App.addEventListener('resetproducten', function(data){
		Titanium.API.log('listen 1');
		self.setVisible(false);
	});
	
	return self;
};

module.exports = Bureaustoel;
