var xr = require('xr');
var { routes } = require('./constants');
var stateTree = require('./stateTree');

module.exports = {

    organization: {
        fetchRepositories: function(org) {
            xr.get(routes.repos(org))
            .then((response) => {
                stateTree.select('commits').set([]);
                stateTree.select('repositories').set(response.data);
            });
        }
    },

    repository: {
        fetchCommits: function(owner, repository) {
            xr.get(routes.commits(owner, repository))
            .then((response) => {
                stateTree.select('commits').set(response.data);
            });
        }
    }

};
