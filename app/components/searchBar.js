var xr = require('xr');
var { routes } = require('../constants');

module.exports = React.createClass({

    onSubmit: function() {
        var orgName = React.findDOMNode(this.refs.organizationName).value;

        xr.get(routes.repos(orgName))
        .then((response) => {
            window.console.log(response.data);
        });
    },

    render: function() {
        return <div className='searchBar'>
            <input type="text" ref="organizationName" placeholder="Organization Name" />
            <button ref="searchButton" onClick={this.onSubmit}>Search</button>
        </div>
    }

});
