var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
    getInitialState: function() {
        return {
            text: 'Chuck Norris'
        }
    },

    updateText: function(event) {
        this.setState({
            text: event.target.value
        });
    },

    render: function() {
        return (
            <div> 
                <h1>{this.state.text}</h1>
                <input type="text" onChange={this.updateText} />
            </div>
        )
    }
});

ReactDOM.render(<App />, document.getElementById('app'));

