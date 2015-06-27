var actions = require('../actions');

var repositoryListItem = React.createClass({

    onClick: function() {
        actions.repository.fetchCommits(this.props.owner.login, this.props.name);
    },

    render: function() {
        return <li onClick={this.onClick}>
            <h3>{this.props.name}</h3>
            <div className="repoMeta">
                <span className="octicon octicon-repo-forked"></span>
                <span className="dataPoint">{this.props.forks}</span>
            </div>
        </li>
    }

});

module.exports = repositoryListItem;
