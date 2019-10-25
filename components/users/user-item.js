import { useState } from 'react'
import { inject, observer } from 'mobx-react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Button from '@material-ui/core/Button'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import withUsers from '../../api/users'

export default inject('store')(
  observer(
    withUsers(({
      item,
      users,
      store: {
        toast
      },
      onFinish = () => {},
      onError = () => {}
    }) => {
      const [confirming, setConfirming] = useState(false)
      const handleDelete = async () => {
        console.log('delete:', item.id)
        try {
          const result = await users.delete(item.id)
          toast.success('删除成功!')
          onFinish(result)
        } catch (err) {
          onError(err)
        }
      }

      return (
        <TableRow>
          <TableCell>{item.id}</TableCell>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.age}</TableCell>
          <TableCell>{item.gender}</TableCell>
          <TableCell>
                {
                  confirming
                  ? (
                    <ClickAwayListener onClickAway={() => setConfirming(false)}>
                      <Button
                        onClick={() => handleDelete()}
                        color="secondary"
                        variant="contained"
                      >确认</Button>
                    </ClickAwayListener>
                  )
                  : <Button onClick={() => setConfirming(true)}>删除</Button>
                }
          </TableCell>
        </TableRow>
      )
    })
  )
)
