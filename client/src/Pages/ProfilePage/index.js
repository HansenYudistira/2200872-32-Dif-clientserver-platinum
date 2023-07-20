import React from "react";

// import reactstrap
import { 
    Card,CardBody,CardTitle,CardSubtitle,Container
} from "reactstrap";

// import css
import "../../Styles/profilePage.css"

// import component
import Header from "../../Component/ProfilePage/Header";
import Modal from "../../Component/ProfilePage/Modal";
import Footer from "../../Component/ProfilePage/Footer";

// import icons
import avatar from "../../Assets/img/avatar.jpg";
import { IoLocationOutline } from "react-icons/io5";

function ProfilePage() {
   
    return (
        <div className="bgProfile">
            <Container style={{ justifyContent: "center"}}>
                <div className="cardProfile">
                    <Card  body outline color='dark'
                        className="bgCard"
                    >
                        <Header />
                        <div className="d-flex justify-content-center">
                            <img alt="" src={avatar} className="styleAvatar" />  
                        </div> 
                        <CardBody>
                            <CardTitle tag="h5" className="text-center">
                                NOURAFNI_
                            </CardTitle>
                            <CardSubtitle
                                className="mb-4 text-muted text-center"
                                tag="h6"
                            >
                                nourafni@gmail.com
                            </CardSubtitle>
                            <div style={{ marginBottom: "70px" }}>
                                {/* <p><IoLocationOutline/> malang,indonesia</p> */}
                            </div>
                            <Modal />
                            <Footer />
                        </CardBody>
                    </Card>
                </div>
            </Container>
        </div>
    )
}
    
export default ProfilePage;


    