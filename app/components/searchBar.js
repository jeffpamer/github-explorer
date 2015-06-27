var xr = require('xr');
var { routes } = require('../constants');

var stateTree = require('../stateTree');
var repositoryCursor = stateTree.select('organization', 'repositories');

repositoryCursor.on('update', () => {
    window.console.log('repo updated!', repositoryCursor.get());
});

module.exports = React.createClass({

    onSubmit: function() {
        var orgName = React.findDOMNode(this.refs.organizationName).value;

        xr.get(routes.repos(orgName))
        .then((response) => {
            repositoryCursor.push(response.data);
        });
    },

    render: function() {
        return <div className='searchBar'>
            <input type="text" ref="organizationName" placeholder="Organization Name" />
            <button ref="searchButton" onClick={this.onSubmit}>Search</button>
        </div>
    }

});
