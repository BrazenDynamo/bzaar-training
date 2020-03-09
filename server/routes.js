const routes = require('next-routes');
const routesImpl = routes();

routesImpl.add('login');

module.exports = routesImpl;