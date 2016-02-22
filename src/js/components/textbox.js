var React = require('react');
var globals = require('../globals/globals');
var socket = globals.socket;

var Textbox = React.createClass({
    _handleSubmit: function(event){
        event.preventDefault();

        var message = {
            username: this.props.username,
            text: event.target.text.value
        };

        if(message.text.length > 0){
            event.target.text.value = null;
            socket.emit('message:send', message);
        }
    },
    render: function(){
        return(
            <form id="text-box" onSubmit={this._handleSubmit}>
                <input type="text" id="text" placeholder="Your message" autoComplete="off" />
                <button type="submit"></button>
            </form>
        );
    }
});

module.exports = Textbox;
