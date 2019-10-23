const express = require('express')
const router = express.Router()

const users = [
  {
    id: 'u001',
    name: '张三1',
    age: 18,
    gender: 'male'
  },
  {
    id: 'u002',
    name: '张三2',
    age: 18,
    gender: 'male'
  },
  {
    id: 'u003',
    name: '张三3',
    age: 18,
    gender: 'male'
  },
]

// list
router.get('/', (req, res) => {
  console.log('getting list result.')
  res.json(users)
})

// add
router.post('/', (req, res) => {
  const newUser = req.body
  console.log('will add:', req.body)
  const user = users.find(item => item.id === newUser.id)
  if (user) {
    res.status(409).send('User already exists')
    return;
  }

  users.push(newUser)
  res.json(newUser)
})

// update
router.put('/:id', (req, res) => {
  console.log('will update:', req.params.id, req.body)
  const userIndex = users.findIndex(item => item.id === req.params.id)
  if (userIndex === -1) {
    res.status(404).send('User not found')
    return 
  }
  const newUser = {
    ...user,
    ...req.body,
    id,
  }
  users[userIndex] = newUser
  res.json(newUser)
})

// delete
router.delete('/:id', (req, res) => {
  const id = req.params.id
  console.log('will delete:', id)
  const userIndex = users.findIndex(item => item.id === req.params.id)
  if (userIndex === -1) {
    res.status(404).send('User not found')
    return
  }

  const user = user.splice(userIndex, 1)[0]

  res.json(user)
})

module.exports = router
