import { types, applySnapshot } from 'mobx-state-tree'

import Messages from './modules/messages'

let store = null

const Store = types
  .model({
    // messages: types.reference(Messages)
    messages: Messages
  })

export const initializeStore = (isServer, snapshot = null) => {
  if (isServer || store === null) {
    store = Store.create({
      messages: Messages.create({
        list: []
      })
    })
  }

  if (snapshot) {
    applySnapshot(store, snapshot)
  }

  return store
}
