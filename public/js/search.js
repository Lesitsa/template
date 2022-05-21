import { token } from "./token.js";
import { swit } from "./switchError.js";

/**
 * Осуществляет выполнение функции func с периодичностью в ms миллисекунд.
 * 
 * @param {*} func Поисковая фунция, которой задается периодичность
 * @param {*} ms Количество миллисекунд
 * @returns Поисковая фунция с заданной периодичностью.
 */
const debounce = (func, ms) => {
    let timeout;
    return function() {
        const fnCall = () => {func.apply(this, arguments)}
        clearTimeout(timeout);
        timeout = setTimeout(fnCall, ms);
    }
}

/**
 * Получение выпадающего списка треков.
 */
async function search() {
    if (document.querySelector(".header__search").value != "") {
        //Включение отображения выпадающего списка треков, если строка поиска не пуста
        document.querySelector(".search__container").classList.add("display__flex");
        fetch("https://api.spotify.com/v1/search?q=track:+" 
             + document.querySelector(".header__search").value + "++&type=track", {
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
            //Заполнение выпадающего списка треками
            const container = document.querySelector(".search__container");
            container.innerHTML = "";
            data.tracks.items.forEach(element => {
                const a = document.createElement("a");
                a.classList.add("search__container__a");

                const div = document.createElement("div");
                //Объявление события при нажатии на трек, результат - воспроизведение
                div.addEventListener("click",function(){
                    let audio = document.querySelector("audio");
                    //Включение отображения аудио-меню
                    audio.classList.add("display__flex");
                    audio.setAttribute("src",element.preview_url);
                });

                const img = document.createElement("img");
                img.classList.add("search__container__img");

                const text = document.createElement("h3");
                text.classList.add("search__container__text");
                text.textContent = element.name;
                img.setAttribute("src", element.album.images[0].url);

                a.appendChild(img);
                a.appendChild(text);
                div.appendChild(a);
                container.appendChild(div);
            });
        //Обработка исключений
        }).catch(function(error) {
            //Вызов функции переадресации
            swit(error);
        });
    }
    else {
        //Выключение отображения выпадающего списка треков, если строка поиска пуста
        document.querySelector(".search__container").classList.remove("display__flex");
    }
};
//Настройка задержки функции search, используя функцию-обертку debounce
search = debounce(search, 700);
if(!!document.querySelector('.header__search'))
    //Объявление события при "отпускании" клавиши,
    //результат - начало поиска по содержимому строки поиска
    document.querySelector(".header__search").addEventListener("keyup", async() => {
        await search();
})
