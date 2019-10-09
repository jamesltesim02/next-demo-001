import React from 'react'
import { inject, observer } from 'mobx-react'

import MessageItem from './message-item'

@inject('store')
@observer
export default class extends React.Component {
  render() {
    const {
      list,
      messageCount
    } = this.props.store.messages

    return (
      <ul>
        {
          messageCount
          ? list.map(m => <MessageItem key={m.id} message={m} />)
          : <li>no records</li>
        }
        <style jsx>{`
          ul {
            pading: 0;
            padding: 0;
          }
        `}</style>
      </ul>
    )
  }
}
