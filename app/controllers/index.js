//programatically add the widget to the view from inside the controller
var toggleButtonWidget = Alloy.createWidget("ButtonToggle");

//get the main view from the widget
$.mainWindow.add(toggleButtonWidget.getView());

//open
$.mainWindow.open();