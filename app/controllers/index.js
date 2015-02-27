//programatically add the widget to the view from inside the controller
var buttonToggleWidget = Alloy.createWidget("buttonToggle");

//get the main view from the widget
$.mainWindow.add(buttonToggleWidget.getView());

//open
$.mainWindow.open();