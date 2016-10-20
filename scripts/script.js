function downloadText() {
	var fileText = document.getElementById("workspace").value;
	var fileDownloadName = document.getElementById("fileName").value;

	var blob = new Blob([fileText], {type: "text/plain;charset=utf-8"});
	saveAs(blob, fileDownloadName);
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
