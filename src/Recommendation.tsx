import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Recommendation = (props: { listData: never[] }) => {
    if (props.listData !== []) {
        return (
            <div  className="recommendation__menu">
                {/* Заголовок */}
                <div className="recommendation__header">
                    <h2>
                        <a className="recommendation__header__h2__text">Все рекомендации</a>
                    </h2>
                    <a className="recommendation__header__a">
                        <span className="recommendation__header__a__text">ВСЕ</span>
                    </a>
                </div>
                {/* Рекомендации */}
                <div className="recommendation__line">
                    <ul className="recommendation__line__ul my_ul">
                        {props.listData.map((elemData: any) =>
                            <li key={elemData.id}>
                                <div className="recommendation__line__ul__picture-caption">
                                    <img className="recommendation__line__ul__picture" src={elemData.icons[0].url}></img>
                                    <div className="recommendation__line__ul__picture__name">{elemData.name}</div>
                                </div>
                            </li>)}
                    </ul>
                </div>
            </div>
        )
    } else {
        console.log("Nothing found");
        return (<div>Nothing found</div>)
    }
}

export default Recommendation