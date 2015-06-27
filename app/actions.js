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
    },

    repository: {
        fetchCommits: function(owner, repository) {
            xr.get(routes.commits(owner, repository))
            .then((response) => {
                window.console.log(response.data);
            });
        }
    }

};
