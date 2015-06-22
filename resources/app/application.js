var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow;

app.on('ready', function () {

    mainWindow = new BrowserWindow({
        width: 1000,
        height: 600,
        frame: false
    });


    mainWindow.loadUrl('file://' + __dirname + '/index.html');

    mainWindow.on('close', function () {

    });
});

app.on('window-all-closed', function () {
    app.quit();
});
