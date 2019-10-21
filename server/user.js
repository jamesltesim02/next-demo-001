
const list = () => ([
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
])

const save = user => {
  console.log(JSON.stringify(user))
  return true
}

const remove = id => {
  console.log(id)
  return 1
}

module.exports = {
  list,
  save,
  remove
}
