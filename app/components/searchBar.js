var xr = require('xr');
var { routes } = require('../constants');
var actions = require('../actions');

module.exports = React.createClass({

    onKeyPress: function(e) {
        if (e.keyCode === 13) {
            this.onSubmit();
        }
    },

    onSubmit: function() {
        var orgName = React.findDOMNode(this.refs.organizationName).value;
        actions.organization.fetchRepositories(orgName);
    },

    render: function() {
        return <div className='searchBar'>
            <input type="text" ref="organizationName" placeholder="Organization Name" onKeyUp={this.onKeyPress}/>
            <button ref="searchButton" onClick={this.onSubmit}>Search</button>
        </div>
    }

});
