let client_id = "57860e06132c4c6eb541907fd42fe31c";
let client_secret = "915c9ec9afa046a5a07b3a3b0e317d47";

/**
 * Получение токена.
 * @returns Токен API для доступа к сервисам Spotify.
 */
async function token() {
    if((window.localStorage.getItem("token") != null) 
    && (window.localStorage.getItem("expires_in") > Date.now())) {
        //Возвращение токена из локального хранилища, если его срок действия не истек
        return window.localStorage.getItem("token");
    } else {
        //Запрос нового токена, если его нет в хранилище или срок предыдущего истек
        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : 'Basic ' + btoa(client_id + ':' + client_secret)
            },
            body: 'grant_type=client_credentials'
        //Обработка исключений
        }).catch(function(error) {
            //Вызов функции переадресации
            swit(error);
        });
        const data = await result.json();
        //Внесение токена в локальное хранилище
        window.localStorage.setItem("token", data.access_token);
        //Внесение времени истечения действия токена в локальное хранилище (в мс)
        window.localStorage.setItem("expires_in", data.expires_in*1000 + Date.now());
        return data.access_token;
    }
}

export {token, client_id, client_secret};
