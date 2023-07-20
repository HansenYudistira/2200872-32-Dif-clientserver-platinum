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
          <div className="main" style={{ display: 'flex', flexDirection: 'row' }}>
            <Sidebar />
            <div className="table-container" style={{ flexGrow: 1 }}>
              <Table />
            </div>
            <div className='comming-soon' style={{ flexGrow: 0 }}>
              <CommingSoon />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    
    </div>
  );
}



export default Community;
