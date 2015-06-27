var React = window.React = require('react');
var xhr = require('xr');
var R = require('ramda');

var App = React.createClass({

    getInitialState: function() {
        return { repos: [] };
    },

    onSubmit: function() {
        var orgName = React.findDOMNode(this.refs.organizationName).value;

        xhr.get(`https://api.github.com/orgs/${orgName}/repos`)
        .then((response) => {
            this.setState({ repos: response.data });
        });
    },

    renderRepositories: function() {
        return <ul>
            {R.map((repo) => {
                return <li key={repo.id}>{repo.name}</li>;
            }, this.state.repos)}
        </ul>;
    },

    render: function() {
        return (
            <div>
                <input type="text" ref="organizationName" />
                <button ref="searchButton" onClick={this.onSubmit}>Search</button>
                {this.renderRepositories()}
            </div>
        );
    }

});

React.render(<App />, document.body);
