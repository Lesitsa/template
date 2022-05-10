import { token } from "./token.js";

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

let stat = undefined;

/**
 * Получение выпадающего списка треков.
 */
async function search() {
    if (document.querySelector(".header__search").value != "") {
        document.querySelector(".search__container").style.display = "flex";
        fetch("https://api.spotify.com/v1/search?q=track:+" 
             + document.querySelector(".header__search").value + "++&type=track", {
            headers:{
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer '+ await token()
            }
        }).then((result) => {
            if (!result.ok){
                return Promise.reject(result.status);
            }
            else {
                return result.json()
            }
        }).then((data) => {
            const container = document.querySelector(".search__container");
            container.innerHTML = "";
            data.tracks.items.forEach(element => {
                const a = document.createElement("a");
                a.classList.add("search__container__a");

                const div = document.createElement("div");
                div.addEventListener("click",function(){
                    let audio = document.querySelector("audio");
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
        }).catch(function(error) {
            switch(error) {
                case 400:
                    stat = 400;
                    window.localStorage.setItem("status",stat);
                    window.location.href = "http://localhost:3000/error.html";
                    break;
                case 401:
                    stat = 401;
                    window.localStorage.setItem("status",stat);
                    window.location.href = "http://localhost:3000/error.html";
                    break;
                case 403:
                    stat = 403;
                    window.localStorage.setItem("status",stat);
                    window.location.href = "http://localhost:3000/error.html";
                    break;
            }
        });
    }
    else {
        document.querySelector(".search__container").style.display = "none";
    }
};

search = debounce(search, 200);
if(!!document.querySelector('.header__search'))
    document.querySelector(".header__search").addEventListener("keyup", async() => {
        await search();
})

