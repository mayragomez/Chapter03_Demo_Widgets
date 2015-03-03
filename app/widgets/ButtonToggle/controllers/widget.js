//event handler for when the user clicks button  
$.container.addEventListener("click", function(_event)
	{
		//hide the clicked item, show the unclikded one
		toggleButtonByIdClicked(_event.source.id);		
	}
); 

//buttonid name of hte id clicked
function toggleButtonByIdClicked(_buttonId)
{

	if(_buttonId === "on")
	{
	
		$.on.hide();
		$.off.show();
	}else if(_buttonId === "off")
	{
		$.on.show();
		$.off.hide();
	}
}