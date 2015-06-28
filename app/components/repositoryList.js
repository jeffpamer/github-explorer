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

    render: function() {
        return <div className="repositoryListContainer">
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
