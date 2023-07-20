import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function ModalProfile(props) {
    const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Modal isOpen={true} fade={false} toggle={props.onClose}> {/* isOpen should be controlled by the parent */}
      <ModalHeader toggle={props.onClose}>User Profile</ModalHeader>
      <ModalBody>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </ModalBody>
    </Modal>
  );
}

export default ModalProfile;