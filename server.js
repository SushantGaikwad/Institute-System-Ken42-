const jsonserver = require("json-server");

const server = jsonserver.create();
const router = jsonserver.router("./db.json");
const middlewares = jsonserver.defaults({
    static: "./build"
})

const port = process.env.PORT || 3001;

server .use(middlewares);
server.use(
    jsonserver.rewriter({
        "/api/*" : "/$1",
    })
);

server.use(router);

server.listen(port, ()=>{
    console.log(`Server is Running on PORT : ${port}`);
});