var xr = require('xr');
var { routes } = require('./constants');
var stateTree = require('./stateTree');

module.exports = {

    organization: {
        fetchRepositories: function(org) {
            xr.get(routes.repos(org))
            .then((response) => {
                stateTree.select('commits').set([]);
                stateTree.select(['ui', 'repo']).unset();
                stateTree.select('repositories').set(response.data);
            });
        },

        sortRepositories: function(sort) {
            stateTree.select(['ui', 'sort']).set(sort);
        }
    },

    repository: {
        fetchCommits: function(owner, repository) {
            stateTree.select('commits').set([]);
            stateTree.select(['ui', 'repo']).set(repository);

            xr.get(routes.commits(owner, repository))
            .then((response) => {
                stateTree.select('commits').set(response.data);
            });
        }
    }

};
