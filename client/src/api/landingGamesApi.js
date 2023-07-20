function TrendingGamesApi() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    return fetch("http://localhost:5000/gamelist/trending", requestOptions)
      .then(response => response.json())
      .catch(error => console.log('error', error))
  };



function PopularGamesApi() {
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

return fetch("http://localhost:5000/gamelist/popular", requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error))
};



function ComingSoonGamesApi() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    return fetch("http://localhost:5000/gamelist/comingsoon", requestOptions)
      .then(response => response.json())
      .catch(error => console.log('error', error))
  };


export {TrendingGamesApi, PopularGamesApi, ComingSoonGamesApi}