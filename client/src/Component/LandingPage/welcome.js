import React from "react";
import { Button, UncontrolledTooltip } from 'reactstrap';
import { FaUserCircle, FaRegFileAlt } from "react-icons/fa";
// FaSignOutAlt


function WelcomeCard() {
    return (
        <div>
            <div className="welcome-card">
                <div className="p-3 d-flex justify-content-between">
                    <div className="mx-3">
                        <h2>Welcome, Guest !</h2>
                        <span>Sign in to play the game</span>
                    </div>
                    <div className="mt-2 d-flex">
                        <a href="/register">
                            <Button color="link" className="mx-3" id="register-button">
                                <FaRegFileAlt size={40} color="white"/>
                            </Button>
                            <UncontrolledTooltip placement="bottom" target="register-button">
                                Register
                            </UncontrolledTooltip>
                        </a>

                        <a href="/login">
                            <Button color="link" className="mx-3" id="login-button">
                                <FaUserCircle size={40} color="white"/>
                            </Button>
                            <UncontrolledTooltip placement="bottom" target="login-button">
                                Login
                            </UncontrolledTooltip>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WelcomeCard;