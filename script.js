//this function based off of thiscouldbebetter.wordpress.com/2012/12/18/loading-editing-and-saving-a-text-file-in-html5-using-javascrip/
function downloadText() {
	var fileText = document.getElementById("workspace").value;
	var textFileBlob = new Blob([fileText], {type:'text/plain'});
	var FileDownloadName = document.getElementById("fileName").value;

	var downloadLink = document.createElement("a");
	downloadLink.download = FileDownloadName;

		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileBlob);



	downloadLink.click();
}

function setStyle() {
  var fontFamily = document.getElementById("setFontFamily").value;
  document.getElementById("workspace").style.fontFamily = fontFamily;

	var fontSize = document.getElementById("setFontSize").value;
	document.getElementById("workspace").style.fontSize = fontSize;

	var fontColor = document.getElementById("setFontColor").value;
	document.getElementById("workspace").style.color = fontColor;

	var bgColor = document.getElementById("setBgColor").value;
	document.getElementById("workspace").style.backgroundColor = bgColor;
}
