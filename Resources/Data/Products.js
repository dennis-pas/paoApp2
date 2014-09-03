function Products() {
	
};


Products.prototype.importOverview = function() {
    var urlCheck = "http://apiapp.planatstudio.com/products.xml";
    
 				var bool = false;
				var xhrCheck = Ti.Network.createHTTPClient({
					    onload: function(e) {
							  	//if(isIos){
						        	xhrCheck.setRequestHeader("Content-Type", "application/xml");
						        //}
						        var xml = this.responseXML;
						        
							    var items = xml.documentElement.getElementsByTagName("Product");
							    var itemVersionCheck = xml.documentElement.getElementsByTagName("Versie");
							    var db = Ti.Database.open('SqlPaoApp');
							    var curVersionArray = db.execute('SELECT versie FROM VersieProduct;');
							    
							    var newVersion = itemVersionCheck.item(0).getElementsByTagName("Versie").item(0).text;
							    var newId = itemVersionCheck.item(0).getElementsByTagName("Versie").item(0).text;
							//    var curVersion = curVersionArray[0].field(1);
							
								
							   /* while (curVersionArray.isValidRow())
							    {
							    	Ti.API.info(" test  " + curVersionArray.fieldByName('versie'));
							    }*/
							   db.close();
							    
								      for (var i=0;i<items.length;i++) {  	
											var ID = items.item(i).getElementsByTagName("ID").item(0).text;
											var leverancier = items.item(i).getElementsByTagName("Leverancier").item(0).text;
											var naam = items.item(i).getElementsByTagName("Naam").item(0).text;
											var type = items.item(i).getElementsByTagName("Type").item(0).text;
											var buyable = items.item(i).getElementsByTagName("Buyable").item(0).text;
											var fotogrid = items.item(i).getElementsByTagName("Fotogrid").item(0).text;		
											var db = Ti.Database.open('SqlPaoApp');
											db.execute('INSERT INTO Product (Supplier, Name, Type, BuyAble, FotoGrid) VALUES("' + leverancier + '","' + naam  + '","' + type + '",' + buyable   + ',"' + fotogrid + '");');			  		
											db.close();
									    }
					       
								    },
								    onerror: function(e) {
								        // this function is called when an error occurs, including a timeout
								        Ti.API.debug(e.error);
								        alert('Geen internet verbinding mogelijk.');
							    	},
							    	timeout:30000  /* in milliseconds */
								});
								xhrCheck.open("GET", urlCheck);
								xhrCheck.send();
};

module.exports = Products;