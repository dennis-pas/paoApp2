function CreateDataBase() {
	var db = Ti.Database.open('SqlPaoApp');
	var result = db.execute('SELECT name FROM sqlite_master WHERE type="table" AND name="Product3D"');
	
	if(!result.isValidRow())	
	{
		
		db.execute('CREATE TABLE Product3D (P3DID  INTEGER NOT NULL PRIMARY KEY, ModelLink varchar(255) NOT NULL, ProductPID integer(10) NOT NULL, FOREIGN KEY(ProductPID) REFERENCES Product(PID));');
		db.execute('CREATE TABLE ProductDocument (PDID  INTEGER NOT NULL PRIMARY KEY, DocumentLink varchar(255) NOT NULL, ProductPID integer(10) NOT NULL, Naam varchar(255), FOREIGN KEY(ProductPID) REFERENCES Product(PID));');
		db.execute('CREATE TABLE QuestionBag (QBID  INTEGER NOT NULL PRIMARY KEY, UserUID integer(10) NOT NULL, FOREIGN KEY(UserUID) REFERENCES "User"(UID));');
		db.execute('CREATE TABLE QuestionBagProductSpecDetail (QBPSDID  INTEGER NOT NULL PRIMARY KEY, Name varchar(255) NOT NULL, QuestionBagProductSpecQBPSID integer(10) NOT NULL, QuestionBagProductSpecQuestionBagQBID integer(10) NOT NULL, FOREIGN KEY(QuestionBagProductSpecQBPSID, QuestionBagProductSpecQuestionBagQBID) REFERENCES QuestionBagProductSpec(QBPSID, QuestionBagQBID));');
		db.execute('CREATE TABLE QuestionBagProductSpec (QBPSID integer(10) NOT NULL, QuestionBagQBID integer(10) NOT NULL, Name varchar(255) NOT NULL, PRIMARY KEY (QBPSID, QuestionBagQBID), FOREIGN KEY(QuestionBagQBID) REFERENCES QuestionBagProduct(QBPID));');
		db.execute('CREATE TABLE ProductPicture (ProductPID integer(10) NOT NULL, PPID  INTEGER NOT NULL PRIMARY KEY, PictureLink varchar(255) NOT NULL, FOREIGN KEY(ProductPID) REFERENCES Product(PID));');
		db.execute('CREATE TABLE ShoppingCartProductSpecDetail (SCPSDID integer(10) NOT NULL, ShoppingCartProductSpecSCPSID integer(10) NOT NULL, ShoppingCartProductSpecShoppingCartProductSCPID integer(10) NOT NULL, Name varchar(255) NOT NULL, PRIMARY KEY (SCPSDID, ShoppingCartProductSpecSCPSID, ShoppingCartProductSpecShoppingCartProductSCPID), FOREIGN KEY(ShoppingCartProductSpecSCPSID, ShoppingCartProductSpecShoppingCartProductSCPID) REFERENCES ShoppingCartProductSpec(SCPSID, ShoppingCartProductSCPID));');
		db.execute('CREATE TABLE ShoppingCartProductSpec (SCPSID integer(10) NOT NULL, ShoppingCartProductSCPID integer(10) NOT NULL, Name varchar(255) NOT NULL, PRIMARY KEY (SCPSID, ShoppingCartProductSCPID), FOREIGN KEY(ShoppingCartProductSCPID) REFERENCES ShoppingCartProduct(SCPID));');
		db.execute('CREATE TABLE ShoppingCartProduct (SCPID  INTEGER NOT NULL PRIMARY KEY, ProductPID integer(10) NOT NULL, ShoppingCartSCID integer(10) NOT NULL, FOREIGN KEY(ProductPID) REFERENCES Product(PID), FOREIGN KEY(ShoppingCartSCID) REFERENCES ShoppingCart(SCID));');
		db.execute('CREATE TABLE QuestionBagProduct (QBPID  INTEGER NOT NULL PRIMARY KEY, ProductPID integer(10) NOT NULL, QuestionBagQBID integer(10) NOT NULL, FOREIGN KEY(ProductPID) REFERENCES Product(PID), FOREIGN KEY(QuestionBagQBID) REFERENCES QuestionBag(QBID));');
		db.execute('CREATE TABLE ShoppingCart (SCID  INTEGER NOT NULL PRIMARY KEY, UserUID integer(10) NOT NULL, FOREIGN KEY(UserUID) REFERENCES "User"(UID));');
		db.execute('CREATE TABLE Adress (AdressID  INTEGER NOT NULL PRIMARY KEY, Street varchar(255) NOT NULL, StreetNumber varchar(255) NOT NULL, City varchar(255) NOT NULL, Country varchar(255) NOT NULL, Postal varchar(20) NOT NULL, UserUID integer(10) NOT NULL, FOREIGN KEY(UserUID) REFERENCES "User"(UID));');
		db.execute('CREATE TABLE "User" (Email varchar(255) NOT NULL, InvoiceAdress integer(20) NOT NULL, Adress integer(20) NOT NULL, FirstName varchar(255) NOT NULL, LastName varchar(255) NOT NULL, Sex varchar(1) NOT NULL, Company integer(10) NOT NULL, Birthdate date NOT NULL, UID  INTEGER NOT NULL PRIMARY KEY);');
		db.execute('CREATE TABLE SpecDetail (SDID  INTEGER NOT NULL PRIMARY KEY, Name integer(10) NOT NULL, PriceExtra integer(10) NOT NULL, SpecsSID integer(10) NOT NULL, SpecDetailSDID integer(10), FOREIGN KEY(SpecsSID) REFERENCES Spec(SID), FOREIGN KEY(SpecDetailSDID) REFERENCES SpecDetail(SDID));');
		db.execute('CREATE TABLE Spec (SID  INTEGER NOT NULL PRIMARY KEY, Name varchar(255) NOT NULL, ProductPID integer(10) NOT NULL, FOREIGN KEY(ProductPID) REFERENCES Product(PID));');
		db.execute('CREATE TABLE Product (PID  INTEGER NOT NULL PRIMARY KEY, Name varchar(255), Type varchar(255), BasicPrijs integer(10), Supplier varchar(255), BuyAble integer(1), Documents integer(10), ProductInformatie varchar(255), FotoGrid varchar(255));');
		db.execute('CREATE TABLE VersieProduct (ID INTEGER PRIMARY KEY, versie INTEGER);');
		db.execute("INSERT INTO VersieProduct (ID, versie) VALUES (1, 1)");
		db.execute('CREATE TABLE Meta (name VARCHAR PRIMARY KEY, value INTEGER);');
		db.execute("INSERT INTO Meta (name, value) VALUES ('databaseVersion', 1)");
	}
	db.close();
};

module.exports = CreateDataBase;