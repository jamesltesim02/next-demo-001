const express = require('express')
const router = express.Router()

let logId = 0
const genderateId = () => {
  return `${Date.now()}${parseInt(Math.random() * 100000)}${logId++}`
}

router.post('/', (req, res) => {
  const log = req.body
  log.id = genderateId()

  console.log(log)
})

module.exports = router
