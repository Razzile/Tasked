var BrowserWindow = require('remote').require('browser-window');
/* alert */
function CustomAlert() {
    this.render = function(dialog) {
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.zIndex = 9999;
        dialogbox.style.zIndex = 99999;
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH + "px";
        dialogbox.style.left = (winW / 2) - (550 * .5) + "px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        document.getElementById('dialogboxhead').innerHTML = "About";
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()" class="btn btn-custom">OK</button>';
    }
    this.ok = function() {
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
    }
}
var Alert = new CustomAlert();
window.alert = Alert.render;

$(document).ready(function() {
    $("html").niceScroll({
        cursorcolor: "#5b135e",
        cursorwidth: 10,
        cursorborder: "0px"
        });
});

function aboutPressed() {
    alert("This is a template app. If you see this, something as gone terribly wrong");
}

function minimizePressed() {
    BrowserWindow.getFocusedWindow().minimize();
}

function closePressed() {
    window.close();
}
