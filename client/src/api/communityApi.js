function CommunityApi() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  return fetch("http://localhost:5000/player/community", requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error))
};


function LeaderboardAPI() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  return fetch("http://localhost:5000/player/leaderboard", requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error))
};

export {CommunityApi, LeaderboardAPI}