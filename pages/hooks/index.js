import React, { useState } from 'react'
import Layout from '../../components/common/layout'

export default () => {
  const [
    state,
    setState
  ] = useState({
    count: 0,
    name: '',
    tempName: '',
    editing: false
  })

  const {
    count,
    name,
    editing
  } = state

  const updateState = (newState) => {
    setState({
      ...state,
      ...newState
    })
  }

  let tempName = ''

  return (
    <Layout title="Hooks demo">
      <h3>hooks: useState</h3>
      <div>
        count: {count}
        &nbsp;&nbsp;&nbsp;
        <button onClick={() => updateState({ count: count + 1 })}>+</button>
        &nbsp;
        <button onClick={() => updateState({ count: Math.max(0, count - 1) })}>-</button>
      </div>
      {
        editing
        ? (
          <div>
            name: &nbsp;
            <input
              type="text"
              defaultValue={name}
              onChange={({ target: { value } }) => tempName = value}
            />
            <button
              onClick={() => updateState({
                name: tempName,
                editing: false
              })}
            >ok</button>
          </div>
        )
        : (
          <div>
            name: &nbsp;
            <span style={{
              display: 'inline-block',
              minWidth: '100px'
            }}>{name}</span>
            <button onClick={() => updateState({ editing: true })}>edit</button>
          </div>
        )
      }
    </Layout>
  )
}
