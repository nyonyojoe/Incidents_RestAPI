const {Router} = require('express');
const controller = require('./controller')

const router = Router();

router.get('/', controller.getIncidents);

router.post('/', controller.addIncidents)

router.get('/:id', controller.getIncidentsById)

module.exports = router;