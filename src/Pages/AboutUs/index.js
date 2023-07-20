import React from 'react';
import Sidebar from '../../Component/Sidebar';
import Footer from '../../Component/Footer';


import { FaGithub } from 'react-icons/fa';
import '../../Styles/LandingPages/community.css';
function AboutUs() {
  return (
    <body>
      <div className="background">
        <div className="container">
          <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: '20px', marginRight: '50px' }}>
              <div className='about-title'>
                <h1>ABOUT US</h1>
                <div className='about-text'>
                  <p>
                    Welcome to our online game platform!</p>


                    <p>We strive to provide a fun and engaging experience for gamers of all ages and backgrounds. Our platform offers a wide variety of games to choose from, including classic favorites and new releases.</p>

                    <p>Our team is made up of passionate gamers and developers who work tirelessly to ensure that our platform is user-friendly, reliable, and secure. We are committed to providing the best possible gaming experience for our users, and we are constantly working to improve our platform and add new features.</p>

                    <p>Whether you're a casual gamer or a hardcore enthusiast, we have something for everyone. So come join us and start playing today!
                  </p>
                </div>
              </div>
              <div className='developer-title'>
  <h1>Developer Team:</h1>

  <div className='developer-name'>
  <div className='developer-info'>
    <div className='developer-info-item'>
      <h6>
        Hansen Yudhistira
      </h6>
      <div className="icon-text-container">
        <FaGithub />
        <span>HansenYudistira</span>
      </div>
    </div>
    <div className='developer-info-item'>
      <h6>
        Ignatius Kurniawan
      </h6>
      <div className="icon-text-container">
        <FaGithub />
        <span>sekrupman</span>
      </div>
    </div>
    <div className='developer-info-item'>
      <h6>
      Difa ‘ Hanan Harahap
      </h6>
      <div className="icon-text-container">
        <FaGithub />
        <span> difahanan</span>
      </div>
    </div>
    <div className='developer-info-item'>
      <h6>
      Agnes Septilia
      </h6>
      <div className="icon-text-container">
        <FaGithub />
        <span> agnes-septilia</span>
      </div>
    </div>
    <div className='developer-info-item'>
      <h6>
      Nour Afni Putri
      </h6>
      <div className="icon-text-container">
        <FaGithub />
        <span>Nourafniputri</span>
      </div>
    </div>
  </div>
</div>

</div>
            
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </body>
  );
}


export default AboutUs;
