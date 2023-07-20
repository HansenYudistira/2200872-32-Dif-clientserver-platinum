import React from "react";
import { Input, Label, Button } from "reactstrap";
import '../../Styles/index.css'

function LoginPage() {
    return (
        <div
            className="d-flex align-items-center justify-content-center"
            style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
        >
        <div 
            className="p-5"
            style={{ 
                width: "400px",
                border: "5px solid black",
                borderRadius: "10px", 
                padding: "20px",
                background:'aliceblue'
            }}>
        <h4 className="text-center mb-4">LOGIN YOUR ACCOUNT</h4><hr/>
        <div>
            {/* <Label for="email"></Label><br/>
            <Input type="email" name="email" id="email" placeholder="EMAIL" required /> */}
        </div>
        <div>
            <Label for="username"></Label><br/>
            <Input type="text" name="username" id="username" placeholder="USERNAME" required style={{border: "1px solid black"}}/>
        </div>
        <div>
            <Label for="password"></Label><br/>
            <Input type="password" name="password" id="password" placeholder="PASSWORD" required style={{border: "1px solid black"}}/>
        </div>
        <div className="d-flex justify-content-center mt-4">
            <Button
                type="submit"
                color="outline-dark"
                style={{ width: "100%", marginTop: "10px" }}
            >
            LOGIN
            </Button>
        </div>
        </div>
    </div>
    );
}

export default LoginPage;
