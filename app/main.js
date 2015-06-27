var React = window.React = require('react');
var { routes } = require('./constants');
var SearchBar = require('./components/searchBar')

var App = React.createClass({

    render: function() {
        return <div>
            <SearchBar />
        </div>
    }

});

React.render(<App />, document.body);
