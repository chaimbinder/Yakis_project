let { Router } = require('express')
let { getCurrentTime } = require('../../DAL/ModelSequelize')
const axios = require('axios');
let router = Router()

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(`http://transitions:5000`).then((e) => {
      res.status(200).send("chaim binder " + e.data);
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get('/time', async (req, res) => {
  try {
    let time = await getCurrentTime()
    res.status(200).send(time)
  } catch (error) {
    res.status(400).send( error )
  }
})
router.get('/2', async (req, res) => {
  try {
    let tst = {"mm":"nn"}
    res.status(200).json(tst)
  } catch (error) {
    res.status(400).send( error )
  }
})
module.exports = router