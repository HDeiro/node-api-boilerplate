import { Application } from "express";
import { getLogger } from "log4js";
import { getFilesPaths } from "./utils/files";
import { rootDir } from "./utils/path";

const logger = getLogger('RouterLoader');

/**
 * Recursively iterates based on `{PATH}/endpoints` folder to fetch
 * all `router.ts` files in order to return those as an array
 * of strings.
 * @returns string[]
 */
function getRoutesToBeLoaded(): string[] {
  return getFilesPaths(`${rootDir}/endpoints`)
    .filter(path => path.endsWith('/router.ts'));
}

export default function loadRoutes(app: Application) {
  const routesToBeLoaded = getRoutesToBeLoaded();

  routesToBeLoaded.forEach(async routePath => {
    try {
      // Dynamically fetch the route module whose exports the RouteDefinitions by default
      const { path, router } = (await import(routePath)).default;

      app.use(path, router);

      logger.warn(`Successfully loaded route "${path}"`);
    } catch (err) {
      logger.error(`Error while importing module ${routePath}. Error ${err}`);

      // Proceed throwing error in case it's defined to stop to run the app
      if (process.env.BREAK_ON_ROUTE_ERROR) {
        throw err;
      }
    }
  });
}
