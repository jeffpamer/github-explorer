var { branch } = require('baobab-react/higher-order');
var R = require('ramda');

var commitList = React.createClass({

    renderCommits: function() {
        return R.map((commit) => {
            return <li key={commit.sha}>{commit.commit.message}</li>;
        }, this.props.commits);
    },

    render: function() {
        return <ul className='commitList'>
            {this.renderCommits()}
        </ul>
    }

});

module.exports = branch(commitList, {
    cursors: {
        commits: ['commits']
    }
});
