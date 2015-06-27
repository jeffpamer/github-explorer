var { branch } = require('baobab-react/higher-order');
var R = require('ramda');

var RepositoryListItem = require('./repositoryListItem');

var repositoryList = React.createClass({

    renderRepositories: function() {
        return R.map((repo) => {
            return <RepositoryListItem key={repo.id} {...repo} />;
        }, this.props.repositories);
    },

    render: function() {
        window.console.log(this.props.repositories);
        return <div className="repositoryListContainer">
            <ul className='repositoryList'>
                {this.renderRepositories()}
            </ul>
        </div>
    }

});

module.exports = branch(repositoryList, {
    cursors: {
        repositories: ['repositories']
    }
});
