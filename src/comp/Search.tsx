import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ContextToken, ListenTrack } from '../App';

const Search = (props: any) => {
    const {linkTR, setLinkTR} = useContext(ListenTrack);
    const token = useContext(ContextToken)
    const [items, setItems] = useState([]);
    const [item, setItem] = useState('');

    const k = (event: any) => {
        setItem(event.target.value)
    }

    useEffect(() => {
        if (item != '' && token !== '') {
            fetch("https://api.spotify.com/v1/search?q=track:+" + item + "++&type=track", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then((result) => {
                if (!result.ok) {
                    //Возвращение Promise с указанием ошибки
                    return Promise.reject(result.status);
                }
                else {
                    //Возвращение положительного результата с преобразованием в JSON формат
                    return result.json()
                }
            }).then((data) => {
                setItems(data.tracks.items)
                //Обработка исключений
            }).catch(function (error) {
                console.log("Ошибка "+ error);
            });
        }
    }, [token, item])

    const result = () => {
        if (item == '') {
            return (<></>)
        } else {
            return (
                <div className="search__container">
                    {items.map((element: any) =>
                        <div key={element.id}>
                            <a className="search__container__a" onClick={() => {
                                if(element.preview_url){
                                    setLinkTR(element);
                                }
                            }}>
                                <img className="search__container__img" src={element.album.images[0].url}></img>
                                <h3 className="search__container__text">{element.name}</h3>
                            </a>
                        </div>
                    )}
                </div>
            )
        }
    }

    const inputLocation = useLocation()
    if (inputLocation.pathname == "/recommendation:tracks") {
        return (
            <div>
                <input className="header__search" placeholder="Поиск" type="text" onKeyUp={k}></input>
                {result()}
            </div>
        )
    } else {
        return (<></>)
    }

}

export default Search;