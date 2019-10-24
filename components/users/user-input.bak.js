import { Fragment } from 'react'
import Modal from '@material-ui/core/Modal'
// import Paper from '@material-ui/core/Paper'
import Backdrop from '@material-ui/core/Backdrop'
import { Fade } from '../common/animations'

const UserInput = ({
  adding,
  onClose = () => {}
}) => {
  return (
    <Fragment>
      <Modal
        open={adding}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Fade
          className="add-fade-container"
          in={adding}
        >
          <div className="add-panel">
            <h3>add users</h3>
          </div>
        </Fade>
      </Modal>
      <style jsx>{`
        .add-fade-container {
          height: 100%;
          width: 100%;
        }
        .add-panel {
          box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),
                      0px 5px 8px 0px rgba(0,0,0,0.14),
                      0px 1px 14px 0px rgba(0,0,0,0.12);
          background-color: #fff;
          border: 1px solid #ccc;
          padding: 5px 10px;
        }
      `}</style>
    </Fragment>
  )
}

export default UserInput
