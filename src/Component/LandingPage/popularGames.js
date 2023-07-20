import React from "react";
import {Card, CardBody, CardTitle} from 'reactstrap';


const gameList = [
    {
      title: "Game #1",
      alt: "image1",
      url:
        "https://lh5.googleusercontent.com/xo6zDzj4Mq8JTuh31DRdzWPkmeekU1ykdvy7gmdGNkBnVzHoULgCA_MpL1ybOV2GKEkbvmswUl0iQW0lvnNQe3gqOFi_-bbt3MBzOAla29FvVN753jPZS87Bn7HyXoQ-dwA-ioYg"
    },
    {
      title: "Game #2",
      alt: "image2",
      url:
        "https://cdn.thomasnet.com/insights-images/eaf2ea91-c0ca-488d-ab63-af480b6f78cb/750px.png"
    },
    {
      title: "Game #3",
      alt: "image3",
      url: "https://moneyinc.com/wp-content/uploads/2018/11/Willow-750x500.jpg"
    },
    {
      title: "Game #5",
      alt: "image5",
      url:
        "https://cdn.thomasnet.com/insights-images/eaf2ea91-c0ca-488d-ab63-af480b6f78cb/750px.png"
    },
    {
      title: "Game #5",
      alt: "image5",
      url: "https://moneyinc.com/wp-content/uploads/2018/11/Willow-750x500.jpg"
    },
  ];


  function PopularGames() {
    const filteredGameList = gameList.slice(0, 5);
  
    return (
      <div className="popular-game">
        <div className="mt-4 text-light d-flex">
          <h2 style={{ marginRight: "auto" }}>POPULAR GAMES</h2>
          <a href="/gamelist" className="fst-italic text-decoration-underline">
            {"See all >>>"}
          </a>
        </div>
  
        <div className="d-flex game-container">
          {filteredGameList.map((game, gameIndex) => (
            <div key={gameIndex}>
              <Card
                outline
                style={{
                  width: "9rem",
                  textAlign: "center",
                  backgroundColor: "#200147",
                  borderRadius: "25px",
                  marginLeft: "25px",
                  marginBottom: "20px",
                }}
              >
                <img
                  className="p-1"
                  style={{
                    borderTopRightRadius: "25px",
                    borderTopLeftRadius: "25px",
                  }}
                  alt={game.alt}
                  src={game.url}
                />
                <CardBody>
                  <CardTitle className="h5 text-light">
                    {game.title}
                  </CardTitle>
                  <button className="carousel-button mt-3">
                    PLAY!
                  </button>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default PopularGames;