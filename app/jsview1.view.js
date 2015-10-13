
sap.ui.jsview("app.jsview1", {  

 getControllerName : function() {  
	return "app.jsview1";  
 },  
 
 createContent : function(oController, oModel) {  
	
	var page = new sap.m.Page("page1", {
		title : "Odata test"
	});
	
	var oTable = new sap.m.Table("contact_table", {
        inset: true,
        columns: [
			new sap.m.Column({ header: new sap.m.Label({ text: "USER_ID" }) }),
            new sap.m.Column({ header: new sap.m.Label({ text: "CONTACT" }) })
        ],
    });
	
	oTable.bindAggregation("items", {
        path: "/MyTestSet",
        template: new sap.m.ColumnListItem({
            cells: [
                    new sap.m.Label({ text: "{USER_ID}" }),
                    new sap.m.Label({ text: "{CONTACT}" })
            ]
        })
    });
	
	page.addContent(oTable);
	
	return page;

 }  
   
});  