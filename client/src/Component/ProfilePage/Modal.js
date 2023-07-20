import React, {useState} from "react";
import { 
    Button,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    Input,
    Label
} from "reactstrap";
import "../../Styles/profilePage.css"
import avatar from "../../Assets/img/avatar.jpg";

function modal() {
    // ===modal===
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button block color="dark"
                className="btn mb-3"
                onClick={toggle}
            >
                Edit Profile
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader 
                    toggle={toggle} 
                    className="styleModal"
                >
                    Edit Profile
                </ModalHeader>
                <ModalBody 
                    className="styleModal"
                >
                    <div className="d-flex justify-content-center">
                        <img alt="" src={avatar} className="styleAvatar mb-4" />  
                    </div>  
                    <div className="d-flex justify-content-between">
                        <div>
                            <div>
                                <Label for='username'><b>Username</b></Label>
                                <Input type='text' name='username' id='username' />
                            </div>
                            <div>
                                <Label for='email'><b>Email</b></Label>
                                <Input type='email' name='email' id='email' />
                            </div>
                            <div>
                                <Label for='gender'><b>Gender</b></Label>
                                <Input type='text' name='gender' id='gender' />
                            </div>
                        </div>
                        <div>
                            <div>
                                <Label for='umur'><b>Umur</b></Label>
                                <Input type='number' name='umur' id='umur' />
                            </div>
                            <div>
                                <Label for='city'><b>City</b></Label>
                                <Input type='text' name='city' id='city' />
                            </div>
                            <div>
                                <Label for='country'><b>Country</b></Label>
                                <Input type='text' name='country' id='country' />
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter className="styleModal">
                <Button color="dark" onClick={toggle}>
                    Submit
                </Button>{' '}
                <Button color="danger" onClick={toggle}>
                    Cancel
                </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default modal;