import React from 'react';
import Card from 'react-bootstrap/Card';

import '../../Styles/commingSoon.css';

function CommingSoon() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Title>Coming Soon</Card.Title>
        <Card.Img variant="top" src="./images/games1.png" />
        <Card.Text>
        The World’s #1 multiplayer pool game!
          </Card.Text>        
        <Card.Img variant="top" src="./images/games2.png" />
          <Card.Text>
          Easy to pick up and fun to play.Will you take the cup home?
          </Card.Text>
          <Card.Img variant="top" src="./images/games3.png" />
        <Card.Text>
        Dribble, shoot, score, WIN, in the world's best multiplayer basketball mobile game!
          </Card.Text>        
      </Card>
    </div>
  );
}

export default CommingSoon;
