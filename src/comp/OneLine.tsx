import React from "react";
import Title from "./Title";
import Track from "./Track";

function OneLine(){
    return (
        <div>
            <Title/>
            <div className="recommendation__line">
                <ul className="recommendation__line__ul my_ul">
                    <Track />
                    <Track />
                    <Track />
                    <Track />
                    <Track />
                    <Track />
                </ul>
            </div>
        </div>
    )
}
export default OneLine