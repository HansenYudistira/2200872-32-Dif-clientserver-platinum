import React from 'react';
import {  } from "reactstrap";
import Sidebar from '../../Component/Sidebar';
import '../../Styles/community.css';

function Community() {
  return (<body>
    <div class="background"> 
    <div className="container">         
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '200px' }}>
          <h1>Halaman Community</h1>
        </div>
      </div>
    </div>
    </div>
    </body>
  );
}

export default Community;