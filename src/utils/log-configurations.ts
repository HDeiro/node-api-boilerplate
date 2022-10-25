import { configure } from "log4js";

export default function startLogEngine() {
  configure({
    appenders: {
      console: {
        type: "console"
      },
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
        appenders: [ "app", "errors", "console" ],
        level: process.env.LOG_LEVEL
      },
      http: {
        appenders: [ "access"],
        level: process.env.LOG_LEVEL
      }
    }
  });
}
