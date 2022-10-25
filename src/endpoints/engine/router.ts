import * as express from 'express';
import { RouterDefinitions } from '../../types/route';

const controller = require('./controller');
const router = express.Router();

router.get('/', controller.get);

// Must be default due to dynamic route definitions
export default new RouterDefinitions('/engine', router);
