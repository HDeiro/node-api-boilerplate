import * as express from 'express';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import helmet from 'helmet';
import routeDefs from "./endpoints/engine/route";
import startLogEngine from './utils/log-configurations';
import { rootDir } from './utils/path';

const path = require('path');

// Load Environment Variables
dotenv.config();

// Start log configs
startLogEngine();

// Create Express Instance of the App
const app = express();

// Use Middlewares
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(rootDir, 'assets')));

// Routes
app.use(routeDefs.path, routeDefs.router);
app.get('/', (_, res) => res.send('Node App!'));

// Listener
const server = app.listen(process.env.PORT, () =>
  console.log(`Listening on ${process.env.HOST}:${process.env.PORT}`));

// Exports
module.exports = { app, server };
