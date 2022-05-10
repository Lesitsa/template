
switch(window.localStorage.getItem("status")){
    case '401':
        document.querySelector(".error__header").textContent += ' ' + window.localStorage.getItem("status");
        document.querySelector(".error__message").textContent = "Ошибка сервера =(";
        break;
    case '403':
        document.querySelector(".error__header").textContent += ' ' + window.localStorage.getItem("status");
        document.querySelector(".error__message").textContent = "Spotify недоступен в этой стране =(";
        break;
    case '400':
        document.querySelector(".error__header").textContent += ' ' + window.localStorage.getItem("status");
        document.querySelector(".error__message").textContent = "Некорректный запрос серверу =(";
        break;
}
