const Hapi = require("hapi");

//Address and port
const host = "localhost";
const port = 3000;

//Create server
const server = Hapi.Server({
  host: host,
  port: port,
  routes: {
    cors: {
      origin: ["*"], // an array of origins or 'ignore'
    },
  },
});

//Routes
//Routes
require("./routes/routes")(server);
//Start server
const init = async () => {
  await server.start();
  console.log("Server up! Port: " + port);
};

//Start App
init();
