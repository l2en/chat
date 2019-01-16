var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ port: 9527 });
wss.on('connection', function (ws) {
    console.log('client connected');
    ws.on('message', function (message) {
        ws.send(message)
        console.log(message);
    });
});
