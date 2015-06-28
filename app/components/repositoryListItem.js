var { branch } = require('baobab-react/higher-order');
var actions = require('../actions');

var repositoryListItem = React.createClass({

    onClick: function() {
        actions.repository.fetchCommits(this.props.owner.login, this.props.name);
    },

    renderMetaItem: function(icon, dataPoint) {
        return this.props.sort !== dataPoint ? null :
        <div className="metaItem">
            <span className={`octicon octicon-${icon}`}></span>
            <span className="dataPoint">{this.props[dataPoint]}</span>
        </div>
    },

    render: function() {
        var className = this.props.activeRepo === this.props.name ? 'active' : '';
        return <li className={className} onClick={this.onClick}>
            <h3>{this.props.name}</h3>
            <div className="repoMeta">
                {this.renderMetaItem('repo-forked', 'forks')}
                {this.renderMetaItem('star', 'stargazers_count')}
                {this.renderMetaItem('eye', 'watchers')}
                {this.renderMetaItem('bug', 'open_issues')}
            </div>
        </li>
    }

});

module.exports = branch(repositoryListItem, {
    cursors: {
        activeRepo: ['ui', 'repo'],
        sort: ['ui', 'sort'],
    }
});
