<<<<<<< HEAD
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
=======
import React from 'react';
import {  } from "reactstrap";

import '../../Styles/LandingPages/community.css';
import '../../Styles/table.css';


import Sidebar from '../../Component/Sidebar';
import Footer from '../../Component/Footer';
import Table from '../Community/Table';
import CommingSoon from '../../Component/CommingSoon';

const Community = () => {
  return (
      <div className="background">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <div className="main">
              <Sidebar />
              <div className="table-container">
                <Table />
              </div>
                <CommingSoon />
              </div>
            </div>
            <Footer />
          </div>
        </div>      
  );
}


export default Community;
>>>>>>> origin/main
