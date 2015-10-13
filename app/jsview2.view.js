
sap.ui.jsview("app.jsview2", {  

 getControllerName : function() {  
	return "app.jsview2";  
 },  
 
 createContent : function(oController, oModel) {  

	var page6 = new sap.m.Page("page2", {
		title : "second page",
		showNavButton: true,
		navButtonTap: function(){
			var app = sap.ui.getCore().byId("idApp");
			app.back();
		}
		
	});
	
	return page6;
	
 }  
   
});  