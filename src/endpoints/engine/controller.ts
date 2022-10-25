import { getLogger } from "log4js";

const logger = getLogger('EngineController');

exports.get = (_, res) => {
  logger.trace('Received GET request on engine controller!');
  res.status(200).send('Requested a GET on the engine controller');
}
