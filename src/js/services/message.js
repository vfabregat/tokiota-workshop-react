var rp = require('request-promise');

var Message = (function(){
    var Message = function(){
        var self = this;

        self.send = function(){
            return rp({ method: "POST", uri: URI.base + URI.api + URI.message, body: {username: username}, json: true});
        }
    };
    return new Message();
})();

module.exports = Message;
