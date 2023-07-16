import React from 'react';

//import components
import LandingPageHeader from '../../Component/LandingPage/header';
import WelcomeCard from '../../Component/LandingPage/welcome';
import PopularGames from '../../Component/LandingPage/popularGames';
import LeaderBoard from '../../Component/LandingPage/leaderboard';
import Sidebar from '../../Component/Sidebar';

//import css
import '../../Styles/LandingPages/landingPage.css'

function LandingPage() {
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

                <div>
                  Ini area utk Coming Soon
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