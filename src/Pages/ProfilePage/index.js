// import React from 'react';
import React, { useState } from 'react';
import { Button, UncontrolledTooltip } from 'reactstrap';
import { FaUserCircle, FaRegFileAlt } from "react-icons/fa";
import Sidebar from '../../Component/Sidebar';

//import components
import LandingPageHeader from '../../Component/LandingPage/header';
import WelcomeCard from '../../Component/LandingPage/welcome';
import PopularGames from '../../Component/LandingPage/popularGames';
import LeaderBoard from '../../Component/LandingPage/leaderboard';
import CommingSoon from '../../Component/CommingSoon';

//import css
import '../../Styles/LandingPages/landingPage.css'
import ProfileModal from './Modal';


const ProfilePage = () => {
  return (
    <body>
      <div class="background"> 
        <div className="container">      
          <div style={{ display: 'flex' }}>
            <Sidebar />  
            <div className='content-area d-flex flex-column' >
              <div className='header-area'>
                <LandingPageHeader />
              </div>
              <div className='section-area d-flex'>
                <div className='inner-section d-flex flex-column'>
                <div>
            <div className="welcome-card">
                <div className="p-3 d-flex justify-content-between">
                    <div className="mx-3">
                        <h2>Welcome, (Username)</h2>
                       <ProfileModal />
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
                  <PopularGames />
                  <LeaderBoard />
                </div>
                  <div className='comming-soon'>
                    <CommingSoon />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body> 
  );
}


export default ProfilePage;