let errorData = new URLSearchParams();

/**
 * Перенаправляет пользователя на страницу оповещения об ошибке с кодом ошибки.
 * @param {*} error Код ошибки.
 */
function swit(error) {
    switch(error) {
        case 400:
            errorData.set("error", "400")
            window.location.href = `http://localhost:3000/error.html?${errorData.toString()}`;
            break;
        case 401:
            errorData.set("error", "401")
            window.location.href = `http://localhost:3000/error.html?${errorData.toString()}`;
            break;
        case 403:
            errorData.set("error", "403")
            window.location.href = `http://localhost:3000/error.html?${errorData.toString()}`;
            break;
        default:
            errorData.set("error", "default")
            window.location.href = `http://localhost:3000/error.html?${errorData.toString()}`;
            break;
    }
}

export {swit};
