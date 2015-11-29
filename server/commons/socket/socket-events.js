/// <reference path="../../typings/tsd.d.ts" />
var SocketEvents = (function () {
    function SocketEvents() {
    }
    SocketEvents.init = function (io) {
        io.on('connection', function (client) {
            client.on('users:online', function () {
                io.emit('users:online', 1);
            });
        });
    };
    return SocketEvents;
})();
exports.SocketEvents = SocketEvents;
