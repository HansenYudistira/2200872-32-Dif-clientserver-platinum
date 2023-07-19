import React from "react";
import { CardFooter } from "reactstrap";
import { MdLogout } from "react-icons/md";

function Footer() {
    return (
        <div>
            <CardFooter>
                <div style={{
                    textAlign: "center"
                }}>
                    <a href="/logout" style={{color: "white"}}>
                        <MdLogout /> Logout
                    </a>
                </div>
            </CardFooter>
        </div>
    )
}

export default Footer;