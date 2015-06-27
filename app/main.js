require('./main.scss');

var React = window.React = require('react');
var { root } = require('baobab-react/higher-order');
var stateTree = require('./stateTree');

var SearchBar = require('./components/searchBar')
var RepositoryList = require('./components/repositoryList');

var App = React.createClass({

    render: function() {
        return <div>
            <SearchBar />
            <RepositoryList />
        </div>
    }

});

var ComposedApp = root(App, stateTree);
React.render(<ComposedApp />, document.body);
