import jsonServer from "json-server";

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.listen(3001, () => console.log("JSON Server running"));
