import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <Link className="link" to="/">
                <div className="footer__text-register">
                    <div className="footer__text">
                        <p className="footer__first__text">ПРЕДВАРИТЕЛЬНЫЙ ПРОСМОТР SPOTIFY</p>
                        <p className="footer__second__text">Зарегистрируйся, чтобы слушать музыку и подкасты без ограничений. Иногда мы будем показывать рекламу, но ты сможешь пользоваться сервисом бесплатно!</p>
                    </div>
                    <button className="footer__register">ЗАРЕГИСТРИРОВАТЬСЯ</button>
                </div>
            </Link>
        </footer>
    )
}
export default Footer