//event handler for when the user click button
$.container.addEventListener('click', function(_event){
	//hide the clicked item, show the unclicked one
	buttonToggleByIdClicked(_event.source.id);
});

//_buttonId name of the id clicked
function buttonToggleByIdClicked(_buttonId){
	if (_buttonId === "off") {
		$.on.hide();
		$.off.show();
	}
	else if (_buttonId === "off") {
		$.on.show();
		$.off.hide();
	}
}
