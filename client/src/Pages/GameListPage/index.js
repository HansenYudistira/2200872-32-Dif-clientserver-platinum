import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Container } from "reactstrap";

import { gameListApi } from '../../api/gameListApi'

function GameListPage() {
    // state
    const [gameslist, setGamelist] = useState({ data: [] })

    useEffect(() => {
        // Define the async function to fetch data
        const fetchData = async () => {
            try {
                const result = await gameListApi();
                if (result !== undefined) {
                    console.log(result);
                    setGamelist({ data: result.data });
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Call the fetchData function inside useEffect
    }, []);

    return (
        <div>
            <Container className='my-5'>
                {gameslist.data.map(function (data) {
                    return (
                        <Card
                            style={{
                                width: '18rem',
                                height: '18rem',
                                margin: '5px'
                            }}
                        >
                            <img
                                alt="Sample"
                                src='../../../public/images/game/rps.png'
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    {data.gameName}
                                </CardTitle>
                                <CardText>
                                    {data.gameDescription}
                                </CardText>
                                <Button>
                                    Play Now
                                </Button>
                            </CardBody>
                        </Card>
                    )
                })}
            </Container>
        </div>
    );
}

export default GameListPage;