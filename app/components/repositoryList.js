var { branch } = require('baobab-react/higher-order');
var actions = require('../actions');
var R = require('ramda');

var RepositoryListItem = require('./repositoryListItem');

var repositoryList = React.createClass({

    renderRepositories: function() {
        var diff = (a, b) => {
            return R.prop(this.props.sort, b) - R.prop(this.props.sort, a);
        };

        return R.map((repo) => {
            return <RepositoryListItem key={repo.id} {...repo} />;
        }, R.sort(diff, this.props.repositories));
    },

    renderSortContainer: function() {
        return !this.props.repositories.length ? null :
            <div className="sortContainer">
                Sort:
                {this.renderSortButton('repo-forked', 'forks')}
                {this.renderSortButton('star', 'stargazer')}
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

    sortBy: function(sort) {
        return function() {
            actions.organization.sortRepositories(sort);
        }
    },

    render: function() {
        return <div className="repositoryListContainer">
            {this.renderSortContainer()}
            <ul className='repositoryList'>
                {this.renderRepositories()}
            </ul>
        </div>
    }

});

module.exports = branch(repositoryList, {
    cursors: {
        repositories: ['repositories'],
        sort: ['ui', 'sort'],
        activeRepo: ['ui', 'repo']
    }
});
