/* URL de  Subsonic sur le serveur */
var url = 'http://xx.xx.xx.xx:xxxx';

plugin.loadLang(true);
if (theWebUI.theme) {
  if (theWebUI.theme == 'Oblivion') {
    plugin.loadCSS("linksubsonicoblivion");
  } else {
    plugin.loadCSS("linksubsonic");
  }
} else {
  plugin.loadCSS("linksubsonic");
}

plugin.onLangLoaded = function()
{
  this.addButtonToToolbar("linksubsonic", theUILang.linksubsonic, "window.open('"+url+"')", "help");
  this.addSeparatorToToolbar("help");
}
