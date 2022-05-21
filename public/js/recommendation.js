import { token } from "./token.js";

/**
 * Получение рекомедаций на странице "search.html".
 */
async function recommendation(){
    await fetch('https://api.spotify.com/v1/browse/categories',{
    headers:{
    'Content-Type': 'application/json',
    'Authorization' : 'Bearer '+ await token()
    }
    }).then((result) => {
        if (!result.ok){
            //Возвращение Promise с указанием ошибки 
            return Promise.reject(result.status);
        }
        else {
            //Возвращение положительного результата с преобразованием в JSON формат
            return result.json()
        }
    }).then((data) => {
        //Создание элементов (плейлистов) и помещение их на страницу поиска
        let mainDiv = document.createElement("div");
        mainDiv.classList.add("recommendation__line");

        let mainUl = document.createElement("ul");
        mainUl.classList.add("recommendation__line__ul");

        data.categories.items.forEach(element => {

            let li = document.createElement("li");

            let container = document.createElement("div");
            container.classList.add("recommendation__line__ul__picture-caption");
            
            let container_img = document.createElement("img");
            container_img.classList.add("recommendation__line__ul__picture");
            container_img.src = element.icons[0].url;

            let container_div = document.createElement("div")
            container_div.classList.add("recommendation__line__ul__picture__name");
            container_div.textContent = element.name;

            container.appendChild(container_img);
            container.appendChild(container_div);
            li.appendChild(container);
            
            document.querySelector(".recommendation__line__ul").appendChild(li);
        });
    //Обработка исключений
    }).catch(function(error) {
        //Вызов функции переадресации
        swit(error);
    });
}

recommendation();
