
sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("app.jsview1", {
		
		
		onInit : function () {
			// set data model on view
			/*var oData = {
				recipient : {
				     name : "World"
				}
			};
		 
			var oModel = new JSONModel(oData);*/
			
			var oModel = new sap.ui.model.json.JSONModel();

			/*var names = [
			   {firstname:"Jim1", lastname: "Dan1"},
			   {firstname:"Jim2", lastname: "Dan2"},
			   {firstname:"Jim3", lastname: "Dan3"},
			   {firstname:"Jan-Ingar", lastname: "Tistel"},
			];
			
			oModel.setData(names);*/
			
			this.getView().setModel(oModel);
			
			//var app = this.getView();
			//sap.m.MessageToast.show(app.toString());

			
			sap.ui.getCore().setModel(oModel, "name_model"); 
						
        },
		
		onGotoAnalytics : function (OEvent) {
			//sap.m.MessageToast.show(this.toString());
			//var app = this.getView().app;
			//app.to("asd");  
			
			var app = sap.ui.getCore().byId("idApp");
			app.to("idAppView2");
		},
		
		onGotoUserprofile : function () {

		}
		
    });

});