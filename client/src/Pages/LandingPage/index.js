import React from 'react';
import {  } from "reactstrap";
import Sidebar from '../../Component/Sidebar';

//import components
import LandingPageHeader from '../../Component/LandingPage/header';
import WelcomeCard from '../../Component/LandingPage/welcome';
import PopularGames from '../../Component/LandingPage/popularGames';
import LeaderBoard from '../../Component/LandingPage/leaderboard';
import CommingSoon from '../../Component/CommingSoon';

//import css
import '../../Styles/LandingPages/landingPage.css'

const LandingPage = () => {
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
                  <WelcomeCard />
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


export default LandingPage;