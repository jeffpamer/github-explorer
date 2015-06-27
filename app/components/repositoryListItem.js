var repositoryListItem = React.createClass({

    render: function() {
        return <li>
            <h3>{this.props.name}</h3>
            <div className="repoMeta">
                <span className="octicon octicon-repo-forked"></span>
                <span className="dataPoint">{this.props.forks}</span>
            </div>
        </li>
    }

});

module.exports = repositoryListItem;
