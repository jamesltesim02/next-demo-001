import Layout from '../components/common/layout'
import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class MessageComponent extends React.Component {
  render() {
    return (
      <Layout>
        {this.props.store.messages.messageCount}
        messages
      </Layout>
    )
  }
}

export default MessageComponent
