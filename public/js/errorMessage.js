const errorHeader = document.querySelector(".error__header");
const errorMessage = document.querySelector(".error__message");

//Получение среза строки, необходимой для получения кода ошибки
const errorString = window.location.search.substring(1);
const errorData = new URLSearchParams(errorString);
const errorStatus = errorData.get("error");

// Вывод кода ошибки и соответствующего сообщения на странице оповещения об ошибке
switch(errorStatus){
    case '401':
        errorHeader.textContent += ' ' + errorStatus;
        errorMessage.textContent = "Ошибка сервера =(";
        break;
    case '403':
        errorHeader.textContent += ' ' + errorStatus;
        errorMessage.textContent = "Spotify недоступен в этой стране =(";
        break;
    case '400':
        errorHeader.textContent += ' ' + errorStatus;
        errorMessage.textContent = "Некорректный запрос серверу =(";
        break;
    case 'default':
        errorHeader.textContent = 'Неизвестная ошибка!';
        errorMessage.textContent = "Что-то пошло не так =(";
}
