import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "../../Styles/LandingPages/landingPage.css";

const imageData = [
  {
    title: "Game #1",
    subtitle: "This is description for 1",
    alt: "image1",
    url:
      "https://lh5.googleusercontent.com/xo6zDzj4Mq8JTuh31DRdzWPkmeekU1ykdvy7gmdGNkBnVzHoULgCA_MpL1ybOV2GKEkbvmswUl0iQW0lvnNQe3gqOFi_-bbt3MBzOAla29FvVN753jPZS87Bn7HyXoQ-dwA-ioYg"
  },
  {
    title: "Game #2",
    subtitle: "This is description for 2",
    alt: "image2",
    url:
      "https://cdn.thomasnet.com/insights-images/eaf2ea91-c0ca-488d-ab63-af480b6f78cb/750px.png"
  },
  {
    title: "Game #3",
    subtitle: "This is description for 3",
    alt: "image3",
    url: "https://moneyinc.com/wp-content/uploads/2018/11/Willow-750x500.jpg"
  }
];

const renderSlides = imageData.map((image) => (
  <div key={image.alt} className="mb-5" style={{width:"100%"}}>
    <div className="d-flex justify-content-evenly">
        <div>
            <img src={image.url} alt={image.alt} style={{width:"500px", height:"250px"}}/>  
        </div>
        <br />
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h2>{image.title}</h2>
            <br></br>
            <span>{image.subtitle}</span>
            <button className="carousel-button mt-3">
                PLAY!
            </button>
        </div>
    </div>
  </div>
));

function CarouselComponent() {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  return (
    <div className="carousel-main">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        selectedItem={imageData[currentIndex]}
        onChange={handleChange}
        className="carousel-container"
      >
        {renderSlides}
      </Carousel>
    </div>
    
  );
}

export default CarouselComponent;
