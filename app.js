var express = require('express');
const PORT = 9999;
const HOST = '0.0.0.0';
var app = express();

const { proxy, scriptUrl } = require('rtsp-relay')(app);

const handler = proxy({
    url: `rtsp://admin:Admin234@192.168.43.201:554/live/ch00_1?channel=1&subtype=0`,
    // if your RTSP stream need credentials, include them in the URL as above
    verbose: false,
});

app.ws('/api/stream', handler);
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});

// app.listen(PORT, HOST, function () {
//     console.log(`Running on http://${HOST}:${PORT}`);
// });

app.listen(PORT, function () {
    console.log(`Running on http://${HOST}:${PORT}`);
});