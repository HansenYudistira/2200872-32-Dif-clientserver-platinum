import React from "react";
import {Card, CardBody, CardSubtitle, CardTitle} from 'reactstrap';

import {GiGoldBar} from 'react-icons/gi';

const leaderList = [
    {
      name: "User #1",
      score: 270,
      alt: "image1",
      url:
        "https://lh5.googleusercontent.com/xo6zDzj4Mq8JTuh31DRdzWPkmeekU1ykdvy7gmdGNkBnVzHoULgCA_MpL1ybOV2GKEkbvmswUl0iQW0lvnNQe3gqOFi_-bbt3MBzOAla29FvVN753jPZS87Bn7HyXoQ-dwA-ioYg"
    },
    {
      name: "User #2",
      score: 245,
      alt: "image2",
      url:
        "https://cdn.thomasnet.com/insights-images/eaf2ea91-c0ca-488d-ab63-af480b6f78cb/750px.png"
    },
    {
      name: "User #3",
      score: 150,
      alt: "image3",
      url: "https://moneyinc.com/wp-content/uploads/2018/11/Willow-750x500.jpg"
    },
    {
      name: "User #4",
      score: 145,
      alt: "image5",
      url:
        "https://cdn.thomasnet.com/insights-images/eaf2ea91-c0ca-488d-ab63-af480b6f78cb/750px.png"
    },
    {
      name: "User #5",
      score: 90,
      alt: "image5",
      url: "https://moneyinc.com/wp-content/uploads/2018/11/Willow-750x500.jpg"
    }
  ];



  function LeaderBoard() {
    return (
      <div>
        <div>
          <div className="mt-4 text-light d-flex">
            <h2 style={{ marginRight: "540px" }}>LEADERBOARD</h2>
            <a href="/community" className="fst-italic text-decoration-underline">
              {"See all >>>"}
            </a>
          </div>
  
          <div className="d-flex flex-wrap justify-content-start">
            {leaderList.map((leader, leaderIndex) => (
              <div key={leaderIndex}>
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
                                        borderTopRightRadius:"25px",
                                        borderTopLeftRadius:"25px"
                                    }}
                                    alt={leader.alt}
                                    src={leader.url}
                                />
                                <CardBody>
                                    <CardTitle className="h5 mb-3 text-light">
                                        {leader.name}
                                    </CardTitle>

                                    <CardSubtitle className="h6 text-light">
                                        <div className="d-flex justify-content-around">
                                            <GiGoldBar
                                                size={30}
                                                color=
                                                    {(() => {
                                                        switch (true) {
                                                            case leader.score >= 200:   
                                                                return "#FFD700";
                                                            case leader.score >= 100 && leader.score < 200: 
                                                                return "#C0C0C0";
                                                            default:      
                                                                return "#B08D57";
                                                        }
                                                    })()} >
                                            </GiGoldBar>
                                            <div>{leader.score}</div>
                                        </div>
                                    </CardSubtitle>
                                </CardBody>
                        </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default LeaderBoard;