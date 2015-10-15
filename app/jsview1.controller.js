
sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("app.jsview1", {
		
		
		onInit : function () {
					
			var oModel = new sap.ui.model.odata.ODataModel( "http://localhost:8085/S03/opu/odata/SAP/Z_TEST_SRV" );
			
			this.getView().setModel(oModel);
			
			//var app = this.getView();
			//sap.m.MessageToast.show(app.toString());

			
			sap.ui.getCore().setModel(oModel, "name_model"); 
						
        },
		
		onAddRowClick : function (OEvent) {
			/*var model = sap.ui.getCore().getModel("name_model");
			//model.setProperty("/0/firstname", "qwerqwet");
			
			if (model.oData.length > 0 ) {
				var prop = model.getProperty("/");
				prop.push({"firstname" : "", "lastname": ""});
				model.setProperty("/", prop);
			}else {
				var data = [ {firstname : "", lastname : ""} ];
				model.setData(data);
			}*/
			
			var dialog = new sap.m.Dialog("dialog", {
                modal: true,
				closed: function(oControlEvent){
					sap.ui.getCore().getElementById('dialog').destroy();
				}
			});
			
			dialog.setTitle("Add Contact");
			
			/*var layout = new sap.ui.commons.layout.MatrixLayout({
				columns: 2,
				width: "100%"
			});*/
			/*
			var inputUserId = new sap.m.Input("inputUserId", {
                tooltip: 'User Id',
				//editable: false,
                //value: response.bankCountry,
                width: '200px',
				required: true
			});
			
			var labelUserId = new sap.m.Label("labelUserId", {
				text: 'User ID: ',
				labelFor: inputUserId
			});
			
			var inputContact = new sap.m.Input("textfieldContact", {
                tooltip: 'Contact',
                width: '200px',
				required: true
			});
			
			var labelContact = new sap.m.Label("labelContact", {
				text: 'Contact: ',
				labelFor: inputUserId
			});
			*/
			//layout.createRow(labelUserId, inputUserId);
			//layout.createRow(labelContact, inputContact);	
			//dialog.addContent(layout);
			
			var oGridForm = new sap.ui.layout.Grid({
				hSpacing: 1,
				vSpacing: 1, 	
				content: [
					new sap.m.Label("labelUserId", {
						text: 'User ID: ',
						//labelFor: inputUserId,
						layoutData : new sap.ui.layout.GridData({
							span: "L3 M3 S3"
						})
					}),
					new sap.m.Input("inputUserId", {
						tooltip: 'User Id',
						width: '200px',
						required: true,
						layoutData : new sap.ui.layout.GridData({
							span: "L7 M7 S7"
						})
					}),
					new sap.m.Label("labelContact", {
						text: 'Contact: ',
						layoutData : new sap.ui.layout.GridData({
							span: "L3 M3 S3",
							linebreakL: true,
							linebreakM: true,
							linebreakS: true
						})
					}),
					new sap.m.Input("textfieldContact", {
						tooltip: 'Contact',
						width: '200px',
						required: true,
						layoutData : new sap.ui.layout.GridData({
							span: "L7 M7 S7"
						})
					}),
					new sap.m.Label("labelContactText", {
						text: 'Contact text: ',
						layoutData : new sap.ui.layout.GridData({
							span: "L3 M3 S3",
							linebreakL: true,
							linebreakM: true,
							linebreakS: true
						})
					}),
					new sap.m.Input("textfieldContactText", {
						tooltip: 'Contact text',
						width: '200px',
						required: true,
						layoutData : new sap.ui.layout.GridData({
							span: "L7 M7 S7"
						})
					}),
					new sap.m.Label("labelPhone", {
						text: 'Phone: ',
						layoutData : new sap.ui.layout.GridData({
							span: "L3 M3 S3",
							linebreakL: true,
							linebreakM: true,
							linebreakS: true
						})
					}),
					new sap.m.Input("textfieldPhone", {
						tooltip: 'Phone',
						width: '200px',
						required: true,
						layoutData : new sap.ui.layout.GridData({
							span: "L7 M7 S7"
						})
					}),
					new sap.m.Label("labelEmail", {
						text: 'Email: ',
						layoutData : new sap.ui.layout.GridData({
							span: "L3 M3 S3",
							linebreakL: true,
							linebreakM: true,
							linebreakS: true
						})
					}),
					new sap.m.Input("textfieldEmail", {
						tooltip: 'Email',
						width: '200px',
						required: true,
						layoutData : new sap.ui.layout.GridData({
							span: "L7 M7 S7"
						})
					})

				]
			});
			
			dialog.addContent(oGridForm);
			
			dialog.addButton(new sap.m.Button({text: "Add", press: function(){
				
					var user_id = sap.ui.getCore().byId("inputUserId").getValue();
					var contact = sap.ui.getCore().byId("textfieldContact").getValue();
					var contact_txt = sap.ui.getCore().byId("textfieldContactText").getValue();
					var phone = sap.ui.getCore().byId("textfieldPhone").getValue();
					var email = sap.ui.getCore().byId("textfieldEmail").getValue();
					
					var contactEntry = {user_id: user_id,
										contact: contact,
										contact_text: contact_txt,
										phone: phone,
										email: email};
				
					var serviceURI = "http://localhost:8085/S03/opu/odata/SAP/Z_TEST_SRV/MyTestSet";
					
					var request = { headers: {"X-Requested-With": "XMLHttpRequest",
											   "Accept": "application/atom+xml,application/atomsvc+xml,application/xml",
											   "Content-Type": "application/atom+xml",
											   "DataServiceVersion": "2.0" 
											 },
									requestUri: serviceURI,
									method: "POST",
									//user: "developer",
									//password: "ch4ngeme",
									data: contactEntry };
									
					OData.request( request, function (data) {
						sap.ui.commons.MessageBox.show("New contact saved successfully.", sap.ui.commons.MessageBox.Icon.SUCCESS, "Contact Saved", sap.ui.commons.MessageBox.Action.OK);
					},
					function (err) {
						
					});
				
				}
			}));
			
			dialog.open();    

		},
		
		onLoadClick : function () {
			/*jQuery.sap.require("jquery.sap.storage");  
			var oStorage = jQuery.sap.storage(jQuery.sap.storage.Type.local);
			var model = sap.ui.getCore().getModel("name_model");
			
			var oData = oStorage.get("localData"); 
			if ( oData.length > 0 ) {
				model.setData(oData); 
			}*/
		},
		
		onSaveClick : function () {	
			/*jQuery.sap.require("jquery.sap.storage");  
			var oStorage = jQuery.sap.storage(jQuery.sap.storage.Type.local);  
			var model = sap.ui.getCore().getModel("name_model");
			
			//if (model.oData[0] != null) {
			if ( model.oData.length > 0 ) {
				oStorage.put("localData", model.oData); 
			}*/
			
		},
		
		onDeleteClick : function () {
			/*jQuery.sap.require("jquery.sap.storage");  
			var oStorage = jQuery.sap.storage(jQuery.sap.storage.Type.local); 
			var model = sap.ui.getCore().getModel("name_model");
			
			var oData = [];
			model.setData(oData); 
			oStorage.clear();*/
		}
		
    });

});