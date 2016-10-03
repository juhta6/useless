var menu = new tabris.Page({
  	title: "Menu",
  	topLevel: true,
	background: "grey"
});
new tabris.Button({
  layoutData: {width: 100, height: 60, bottom:100, centerX: 0},
  text: "Reload",
  font: "20px"
}).on("select", function(widget) {
 Reload.open();
  time(widget);
}).appendTo(menu);

var Reload = new tabris.Page({
  	title: "Reload",
  	topLevel: true,
});

var toolbar = tabris.ui.set("toolbarVisible", false)
var fullscreen = tabris.ui.set("displayMode", "fullscreen")

var prgBar = 0;

  var progBar = new tabris.TextView({
  layoutData: {top: 230, centerX:0},
}).appendTo(Reload);
  
  var progressBar = new tabris.ProgressBar({
  layoutData: {centerX: 0, centerY: 0, width: 300},
  maximum: 100,
  selection: 0
}).appendTo(Reload);
  
function time(widget) {
  setInterval(function(widget) {
  progBar.set({text: ("Pre-reloading..."+(++prgBar)+"%"), font: "30px"});
  var selection = progressBar.get("selection") + 1;
  progressBar.set("selection", selection > 100 ? 100 : selection);
  preReload(widget);
}, 5);
}
menu.open();

function preReload(widget) {
	if (prgBar >= 100) {
  	  progBar.set("text", "100%, reloading now.")
      setTimeout(reload,200,widget)
    }
}
function reload(widget) {
tabris.app.reload();
}
