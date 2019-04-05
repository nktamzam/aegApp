const express = require ('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');

//Routes
router.post('/nuevo', tareaController.postTarea);
router.get('/', tareaController.getAllTareas);
router.get('/:id', tareaController.getTareaById);


module.exports = router;