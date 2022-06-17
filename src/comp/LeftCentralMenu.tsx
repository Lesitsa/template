import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function LeftCentralMenu() {
    return (
        <div className="left__center__menu">
            <button className="create__a__playlist">
                <div className="create__a__playlist__outer">
                    <div className="create__a__playlist__inside">
                        <svg role="img" height="12" width="12" aria-hidden="true" viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 hDgDGI"><path className="create__a__playlist__path" d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"></path></svg>
                    </div>
                </div>
                <Link className="link" to="/">
                    <span className="create__a__playlist__text left__main__menu__text">Создать плейлист</span>
                </Link>
            </button>
            <button className="favorite__tracks">
                <div className="favorite__tracks__outer">
                    <div className="favorite__tracks__inside">
                        <svg role="img" height="14" width="14" aria-hidden="true" viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 hDgDGI"><path className="favorite__tracks__path" d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"></path></svg>
                    </div>
                </div>
                <Link className="link" to="/">
                    <span className="favorite__tracks__text left__main__menu__text">Любимые треки</span>
                </Link>
            </button>
        </div>
    )
}

export default LeftCentralMenu