import express from 'express';
import cors from 'cors';
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";

const server = express();
server.use(cors());
server.use(express.json());
TuitsController(server);
HelloController(server);
UserController(server);
server.listen(process.env.PORT || 4000);