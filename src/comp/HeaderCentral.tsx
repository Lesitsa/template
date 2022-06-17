import React from "react";
import Search from "./Search";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function HeaderCentral() {
    return (
        <nav className="heade__of__main">
            <div className="heade__of__main__arrows">
                <button className="heade__of__main__arrow">
                    <Link className="link" to="/">
                        <svg role="img" height="24" width="24" className="Svg-sc-1bi12j5-0 hDgDGI arrow" viewBox="0 0 24 24"><path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"></path></svg>
                    </Link>
                </button>
                <button className="heade__of__main__arrow">
                    <Link className="link" to="/">
                        <svg role="img" height="24" width="24" className="Svg-sc-1bi12j5-0 hDgDGI arrow" viewBox="0 0 24 24"><path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"></path></svg>
                    </Link>
                </button>
                <Search></Search>
            </div>
            <div className="heade__of__main__register-login">
                <Link className="link" to="/">
                    <button className="register-login register">ЗАРЕГИСТРИРОВАТЬСЯ</button>
                </Link>
                <Link className="link" to="/">
                    <button className="register-login login">ВОЙТИ</button>
                </Link>
            </div>
        </nav>
    )
}

export default HeaderCentral;