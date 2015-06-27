var API_BASE = 'https://api.github.com';

module.exports = {

    routes: {
        repos: (orgName) => `${API_BASE}/orgs/${orgName}/repos`
    }

};
