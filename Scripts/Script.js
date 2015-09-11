//this function based off of thiscouldbebetter.wordpress.com/2012/12/18/loading-editing-and-saving-a-text-file-in-html5-using-javascrip/
function downloadText() {
	var fileText = document.getElementById("workspace").value;
	var textFileBlob = new Blob([fileText], {type:'text/plain'});
	var FileDownloadName = document.getElementById("fileName").value;

	var downloadLink = document.createElement("a");
	downloadLink.download = FileDownloadName;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}

function setStyle() {
  var fontFamily = document.getElementById("setFontFamily").value;
  document.getElementById("workspace").style.fontFamily = fontFamily;
}
