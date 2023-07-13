let { Router } = require('express')
let { getCurrentTime } = require('../../DAL/ModelSequelize')
const axios = require('axios');
let router = Router()

router.get('/', async (req, res) => {
  try {
      res.status(200).send("transitions is work")
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get('/1', async (req, res) => {
  try {
    const response = await axios.get(`http://${process.env.users_container_name}:${process.env.MYPORT_USERS}/2`).then((e) => {
      const responseData = JSON.stringify(e.data);
      res.status(200).send("tst is users " + responseData);
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

module.exports = router