var xr = require('xr');
var { routes } = require('./constants');
var stateTree = require('./stateTree');

module.exports = {

    organization: {
        fetchRepositories: function(orgName) {
            xr.get(routes.repos(orgName))
            .then((response) => {
                stateTree.select('organization', 'repositories').push(response.data);
            });
        }
    }

};
