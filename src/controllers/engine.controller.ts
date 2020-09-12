import { getLogger } from "log4js";

const logger = getLogger('EngineController');

exports.get = (req, res) => {
  logger.trace('Trace message!');
  res.status(200).send('Requested a GET on the engine controller');
}
