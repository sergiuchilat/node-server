const {routes} = require('./routes');

const parseRoute = (url) => {
    const routeContent = routes[url.path];
    if(routeContent){
        return {...routeContent}
    }
    return  {...routes['E404']};
}

const route = ({ method, url, header = {}, body = {} }) => {
    return parseRoute(url);
}

module.exports = { route };