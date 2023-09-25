const express = require('express')
const router = express.Router()
const { getAllPrayers, getOnePrayer, createPrayer, updateOnePrayer, deleteOnePrayer } = require('../controllers/prayerController')

// get all prayers
router.get('/', getAllPrayers)

// get one prayer
router.get('/:id', getOnePrayer)

// create one prayer
router.post('/', createPrayer)

// update one prayer
router.patch('/:id', updateOnePrayer)

// delete one prayer
router.delete('/:id', deleteOnePrayer)


module.exports = router