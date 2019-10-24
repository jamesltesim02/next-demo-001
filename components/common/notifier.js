import React from 'react'
import { inject, observer } from 'mobx-react'
import { withSnackbar } from 'notistack'

@inject('store')
@observer
class Notifier extends React.Component {
  displayed = []
  storeDisplayed (id) {
    this.displayed.push(id)
  }

  componentDidMount () {}
}

export default Notifier


// https://codesandbox.io/s/github/iamhosseindhv/notistack/tree/master/examples/mobx-example
// https://iamhosseindhv.com/notistack/demos#variants
// https://material-ui.com/zh/components/dialogs/
// https://cn.mobx.js.org/refguide/api.html