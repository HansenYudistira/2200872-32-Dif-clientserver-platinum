import React from 'react';
import {  } from "reactstrap";
import Sidebar from '../../Component/Sidebar';
import '../../Styles/LandingPages/community.css';

function AboutUs() {
  return (<body>
    <div class="background"> 
    <div className="container">         
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '200px' }}>
          <h1>Halaman About Us</h1>
        </div>
      </div>
    </div>
    </div>
    </body>
  );
}

export default AboutUs;