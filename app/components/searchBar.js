var xr = require('xr');
var { branch } = require('baobab-react/higher-order');
var { routes } = require('../constants');
var actions = require('../actions');

var searchBar = React.createClass({

    onKeyPress: function(e) {
        if (e.keyCode === 13) {
            this.onSubmit();
        }
    },

    sortBy: function(sort) {
        return function() {
            actions.organization.sortRepositories(sort);
        }
    },

    onSubmit: function() {
        var orgName = React.findDOMNode(this.refs.organizationName).value;
        actions.organization.fetchRepositories(orgName);
    },

    renderSortContainer: function() {
        return <div className="sortContainer">
                {this.renderSortButton('repo-forked', 'forks')}
                {this.renderSortButton('star', 'stargazers_count')}
                {this.renderSortButton('eye', 'watchers')}
                {this.renderSortButton('bug', 'open_issues')}
            </div>
    },

    renderSortButton: function(icon, sort) {
        var className = this.props.sort === sort ? 'active' : '';
        return <span
            className={`octicon octicon-${icon} ${className}`}
            onClick={this.sortBy(sort)} />
    },

    render: function() {
        return <div className='searchBar'>
            <span className="octicon octicon-mark-github"></span>
            <input type="text" ref="organizationName" placeholder="Organization Name" onKeyUp={this.onKeyPress}/>
            <button ref="searchButton" onClick={this.onSubmit}>Search</button>
            {this.renderSortContainer()}
        </div>
    }

});

module.exports = branch(searchBar, {
    cursors: {
        sort: ['ui', 'sort'],
    }
});
