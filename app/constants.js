var API_BASE = 'https://api.github.com';

module.exports = {

    routes: {
        repos: (org) => `${API_BASE}/orgs/${org}/repos`,
        commits: (owner, repo) => `${API_BASE}/repos/${owner}/${repo}/commits`
    }

};
