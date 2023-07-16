import React from 'react';
import {  } from "reactstrap";
import Sidebar from '../../Component/Sidebar';

const LandingPage = () => {
  return (
    <div>
      <div className="background">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <div className="main">
              <Sidebar />
            </div>          
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
