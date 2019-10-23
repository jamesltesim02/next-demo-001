
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import { Fade } from '../common/animations'
const UserInput = ({
  adding,
  onClose = () => {}
}) => {
  return (
    <div>
      <Modal
        className="add-modal"
        open={adding}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
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
          <div className="add-panel">aaaa</div>
        </Fade>
        <style jsx>{`
          .add-fade-container {
            height: 100%;
            width: 100%;
          }
          .add-panel {
            background-color: #fff;
            border: 1px solid #ccc;
            padding: 5px;
          }
        `}</style>
      </Modal>
    </div>
  )
}

UserInput.getInitialProps = () => {
  return {}
}

export default UserInput
