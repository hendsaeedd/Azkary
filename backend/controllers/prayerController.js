const prayer = require('../models/prayerModel')
const mongoose = require('mongoose')

// get all prayers
const getAllPrayers = async (req, res) => {
  try {
    // get all prayers from db by latest
    const prayers = await prayer.find().sort({ createdAt: -1 })
    res.status(200).json({ msg: 'all prayers', prayers })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}


// get one prayer
const getOnePrayer = async (req, res) => {
  try {
    const { id } = req.params
    // check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) throw Error('invalid id')
    const onePrayer = await prayer.findById(id)

    // if prayer not found
    if (!onePrayer) throw Error('no such prayer')

    res.status(200).json({ msg: 'one prayer', onePrayer })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}


// create one prayer
const createPrayer = async (req, res) => {
  const { title, body, times } = req.body

  // add data to db
  try {
    const newPrayer = await prayer.create({ title, body, times })
    res.status(200).json({ msg: 'prayer created', newPrayer })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}


// update one prayer
const updateOnePrayer = async (req, res) => {
  try {
    const { id } = req.params
    const { title, body, times } = req.body
    if (!mongoose.Types.ObjectId.isValid(id)) throw Error('invalid id')

    const updatePrayer = await prayer.findOneAndUpdate({ _id: id }, { $set: { title, body, times } })
    res.status(200).json({ msg: 'prayer updated', updatePrayer })
    if (!updatePrayer) throw Error('no such prayer')
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}


// delete one prayer
const deleteOnePrayer = async (req, res) => {
  try {
    const { id } = req.params

    // check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) throw Error('invalid id')
    const deletedPrayer = await prayer.findByIdAndDelete(id)

    // if prayer not found
    if (!deletedPrayer) throw Error('no such prayer')

    res.status(200).json({ msg: 'prayer deleted', deletedPrayer })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

module.exports = {
  getAllPrayers,
  getOnePrayer,
  createPrayer,
  updateOnePrayer,
  deleteOnePrayer
}