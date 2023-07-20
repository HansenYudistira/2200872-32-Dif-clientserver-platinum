import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Container } from "reactstrap";
import { gameListApi } from '../../api/gameListApi'

//import css
import '../../Styles/gamelist.css'

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
        <body>
            <Container className='my-5 container'>
                {gameslist.data.map(function (data) {
                    return (
                        <Card
                            style={{
                                width: '18rem',
                                height: '18rem',
                                margin: '10px',
                                color: ' #29262d'
                            }} className='cardClass'
                        >
                            <img
                                alt="Sample"
                                src={data.game_image_url}
                            />
                            <CardBody className='cardClass'>
                                <CardTitle tag="h5">
                                    {data.game_name}
                                </CardTitle>
                                <CardText>
                                    {data.game_description}
                                </CardText>
                                <Button>
                                    {data.game_url}
                                </Button>
                            </CardBody>
                        </Card>
                    )
                })}
            </Container>
        </body>
    );
}

export default GameListPage;