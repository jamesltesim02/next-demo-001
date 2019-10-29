import React from 'react'
import { autorun } from 'mobx'
import { inject, observer } from 'mobx-react'
import { withSnackbar } from 'notistack'

@inject('store')
@observer
class Toaster extends React.Component {
  displayed = []
  storeDisplayed (id) {
    this.displayed.push(id)
  }

  componentDidMount () {
    autorun(() => {
      const {
        displayed,
        props: {
          store: {
            toast: {
              list = [],
              removeToast
            }
          }
        }
      } = this

      list.forEach(({ id, message, options }) => {
        if (displayed.includes(id)) {
          return
        }

        this.props.enqueueSnackbar(message, options)
        this.storeDisplayed(id)
        removeToast(id)
      })
    })
  }

  render () {
    return null
  }
}

export default withSnackbar(Toaster)
