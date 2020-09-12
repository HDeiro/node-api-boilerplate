import * as express from 'express';

const controller = require('../controllers/engine.controller');
const router     = express.Router();

router.get('/', controller.get);

module.exports = router;
