import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('./mocks/routes.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3001, () => console.log('JSON Server running'));
