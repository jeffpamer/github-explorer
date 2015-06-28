# github-explorer

## Quick-starting the application
For convenience, compiled files have been committed to the repository.
To run the application simply start a web server in the public directory. The
basic node.js http server is recommended as a quick way to get started:
`npm install -g http-server` then run `http-server` in `/public` and browse to `http://localhost:8080` (by default).

Alternately, you should be able to run the application by simply opening `public/index.html` from your local file system, as long as your host system does not block outgoing XHR requests from local files.

## Development Requirements
1. [Node.js](http://nodejs.org/)
    - [Installing Node](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
    - For versioning node, [NVM](https://github.com/creationix/nvm) can be used.
2. [Webpack](http://webpack.github.io/)
    - It is recommended to install webpack globally: `npm install webpack -g`
3. Install remaining project dependencies: `npm install`

To recompile all application files run `webpack`, to start-up the dev server run: `npm start`

## Testing
`npm test`
- There are currently known issues which will prevent the tests from running. They are still being worked on.
