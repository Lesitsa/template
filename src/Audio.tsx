import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ListenTrack } from "./App"

const ListenAudio = () => {
    const [audio] = useState(() => new Audio())
    const {linkTR, setLinkTR } = useContext(ListenTrack)
    const [play, setPlay] = useState(false)
    const locat = useLocation()

    useEffect(() => {
        if (play) {
            audio.play()
        }
        else {
            audio.pause()
        }
    }, [play])

    if (linkTR === null) {
        return (<></>)
    }
    else {
        audio.src = linkTR.preview_url
        return (
            <div className="audioTagDiv">
                <button className="audioTagPlayPause" onClick={() => { if (!play) { setPlay(true) } else { setPlay(false) } }}>{!play && "►"}{play && "⬛"}</button>
                <div className="audioTagNameTrack" >{linkTR.name}</div>
            </div>
        )
    }
}
export default ListenAudio