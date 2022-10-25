import * as express from 'express';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import helmet from 'helmet';
import * as bodyParser from 'body-parser';
import { configure } from "log4js";
import routeDefs from "./endpoints/engine/route";

const path    = require('path');
const rootDir = require('./utils/path');

// Load Environment Variables
dotenv.config();

// Create Express Instance of the App
const app = express();

// Use Middlewares
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(rootDir, 'assets')));

// Defining Logs
configure({
  appenders: {
    access: {
      type: "dateFile",
      filename: `${process.env.LOG_PATH}/base-access.log`,
      pattern: "-yyyy-MM-dd",
      category: "http"
    },
    app: {
      type: "file",
      filename: `${process.env.LOG_PATH}/base-api.log`,
      maxLogSize: 10485760,
      numBackups: 3
    },
    errorFile: {
      type: "file",
      filename: `${process.env.LOG_PATH}/base-api-errors.log`
    },
    errors: {
      type: "logLevelFilter",
      level: "ERROR",
      appender: "errorFile"
    }
  },
  categories: {
    default: {
      appenders: [ "app", "errors" ],
      level: process.env.LOG_LEVEL
    },
    http: {
      appenders: [ "access"],
      level: process.env.LOG_LEVEL
    }
  }
});

// Routes
app.use(routeDefs.path, routeDefs.router);
app.get('/', (_, res) => res.send('Node App!'));

// Listener
const server = app.listen(process.env.PORT, () => {
  return console.log(`Listening on ${process.env.HOST}:${process.env.PORT}`);
});

// Exports
module.exports = { app, server }
