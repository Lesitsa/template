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
            return Promise.reject(result.status);
        }
        else {
            return result.json()
        }
    }).then((data) => {
        console.log(data);
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
}

recommendation();