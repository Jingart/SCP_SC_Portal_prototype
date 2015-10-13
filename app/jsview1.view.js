
sap.ui.jsview("app.jsview1", {  

 getControllerName : function() {  
	return "app.jsview1";  
 },  
 
 createContent : function(oController, oModel) {  

	var page = new sap.m.Page("page1", {
		title : "UON Supply Chain Portal"
	});
	
	/*
	var bar = new sap.m.Bar({
		contentLeft: [ new sap.m.Button('ButtonAddRow', {icon : "sap-icon://add", 
													     press : oController.onAddRowClick })],
												 
		contentMiddle: [ new sap.m.Button('ButtonLoad', {icon : "sap-icon://action", 
														 press : oController.onLoadClick }),
											   
					     new sap.m.Button('ButtonSave', {icon : "sap-icon://save",
														 press : oController.onSaveClick }),
						 
						 new sap.m.Button('ButtonDelete', {icon : "sap-icon://delete",
														   press : oController.onDeleteClick })]
	});*/
	
	var create_request_button = new sap.m.Button('ButtonLoad', {icon : "sap-icon://add", 
																text : "Create request"
												                //press : oController.onLoadClick 
	});
											   
	var view_request_button = new sap.m.Button('ButtonSave', {icon : "sap-icon://action",
														      text : "MyRequests"
														      //press : oController.onSaveClick 
	});
	
	
	var flex_box_top = new sap.m.FlexBox('FlexBox1', { justifyContent : sap.m.FlexJustifyContent.Center 
	});
	
	flex_box_top.addItem(create_request_button);
	flex_box_top.addItem(view_request_button);

	page.addContent(flex_box_top);
	
	/*
	var page_analytics = new sap.m.Page("pageAnalytics", {
		title : "Analytics"
	});
	
	var page_userprofile = new sap.m.Page("pageUserProfile", {
		title : "User Profile"
	});
	
	var page_contact = new sap.m.Page("pageContact", {
		title : "Contact"
	});
	
	var page_settings = new sap.m.Page("pageSettings", {
		title : "Settings"
	});
	
	var nav_container = new sap.m.NavContainer('NavContainer', {
	});
		
	nav_container.addPage(page_analytics);
	nav_container.addPage(page_userprofile);
	nav_container.addPage(page_contact);
	nav_container.addPage(page_settings);
	*/
	
	
	var flex_box_middle = new sap.m.FlexBox('FlexBox2', { justifyContent : sap.m.FlexJustifyContent.Center
	});
	
	var goto_analytics_button = new sap.m.Button('ButtonGotoAnalytics', {icon : "sap-icon://add", 
																		 text : "Analytics",
																		 press : [oController.onGotoAnalytics, oController] 
	});
											   
	var goto_userprofile_button = new sap.m.Button('ButtonGotoUserprofile', {icon : "sap-icon://action",
																			 text : "Userprofile",
																			 press : oController.onGotoUserprofile 
	});
	
	flex_box_middle.addItem(goto_analytics_button);
	flex_box_middle.addItem(goto_userprofile_button);
	
	page.addContent(flex_box_middle);
	
	
	return page;
 }  
   
});  