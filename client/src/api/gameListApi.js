function gameListApi() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    return fetch("http://localhost:4000/gamelist/get", requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
}

export { gameListApi };