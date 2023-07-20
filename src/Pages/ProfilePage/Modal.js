import React, { useState } from 'react';
import { Button, Modal, ModalHeader, Input, ModalFooter } from 'reactstrap';

function ProfileModal(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Upload your avatar
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Upload Avatar</ModalHeader>
        <Input
      id="exampleFile"
      name="file"
      type="file"
    />
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Upload
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ProfileModal;