let client_id = "57860e06132c4c6eb541907fd42fe31c";
let client_secret = "915c9ec9afa046a5a07b3a3b0e317d47";

/**
 * Получение токена.
 * @returns Токен API для доступа к сервисам Spotify.
 */
async function token() {
    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(client_id + ':' + client_secret)
        },
        body: 'grant_type=client_credentials'
    }).catch(function(error) {
        switch(error) {
            case 400:
                window.localStorage.setItem("status","400");
                window.location.href = "http://localhost:3000/error.html";
                break;
            case 401:
                window.localStorage.setItem("status","401");
                window.location.href = "http://localhost:3000/error.html";
                break;
            case 403:
                window.localStorage.setItem("status","403");
                window.location.href = "http://localhost:3000/error.html";
                break;
        }
    })
    const data = await result.json();
    return data.access_token;        
}

export {token, client_id, client_secret};