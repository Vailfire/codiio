<!DOCTYPE html>

<html>
<head>
  <?php echo "Hello"; ?>
  <title>HTML Text Editor</title>

  <script type="text/javascript" src="scripts/script.js"></script>
  <link type="text/css" rel="stylesheet" href="stylesheets/styles.css">
</head>

<body>
  <div id="workArea">
    <textarea id="workspace" placeholder="your text or code goes here..."></textarea>
  </div>
  <br/>
  <div id="downloadArea">
    <input type="text" id="fileName" placeholder="FileName.extension"></input>
    <button type="button" onclick="downloadText()">Save File</button>

  </div>
  <div id="settingsSlider">
    <img src="images/settingsGrabber.png" width="64px" height="64px">
    <div id="styleSettings">
      <input type="text" id="setFontFamily" class="editorOptions" placeholder="Editor Font Family"></input>
      </br>
      <input type="text" id="setFontSize" class="editorOptions" placeholder="Editor Font Size"></input>
      </br>
      <label for="setFontColor" class="editorOptions">Font Color</label>
      <input type="color" id="setFontColor" class="editorOptions" placeholder="Editor Font Color"></input>
      </br>
      <label for="setBgColor" class="editorOptions">Background Color</label>
      <input type="color" id="setBgColor" class="editorOptions" value="#ffffff"></input>
      </br>
      <button onclick="setStyle()" id="styleButton" class="editorOptions">Set Style</button>
    </div>
  </div>
</body>
</html>
