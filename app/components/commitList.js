var { branch } = require('baobab-react/higher-order');
var R = require('ramda');

var CommitListItem = require('./commitListItem');

var commitList = React.createClass({

    renderCommits: function() {
        return R.map((commit) => {
            return <CommitListItem key={commit.sha} {...commit} />;
        }, this.props.commits);
    },

    render: function() {
        return <div className="commitListContainer">
            <ul className='commitList'>
                {this.renderCommits()}
            </ul>
        </div>
    }

});

module.exports = branch(commitList, {
    cursors: {
        commits: ['commits']
    }
});
