import * as express from 'express';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import helmet from 'helmet';
import startLogEngine from './utils/log-configurations';
import { rootDir } from './utils/path';
import loadRoutes from './router';

// Load Environment Variables
dotenv.config();

// Defines the path to SRC (this folder)
process.env.PATHS_SRC = __dirname;

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
loadRoutes(app);

// Listener
const server = app.listen(process.env.PORT, () =>
  console.log(`Listening on ${process.env.HOST}:${process.env.PORT}`));

// Exports just for testing purposes
if (process.env.TESTING) {
  module.exports = { app, server };
}
