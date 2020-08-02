import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import './previewModal.scss';

const PreviewModal = (props) => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={props.trigger}
    >
      <Modal.Header>{props.title}</Modal.Header>
      <Modal.Content image className="btl-image-container">
        <Image size='large' src={props.image} wrapped />
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default PreviewModal;