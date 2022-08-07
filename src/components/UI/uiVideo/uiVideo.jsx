import { useEffect, useRef } from "react";
import cn from "classnames";

import styles from "./uiVideo.module.css";

const UiVideo = ({ src, classes, playbackRate = 1.0 }) => {

    const videoRef = useRef(null);

    useEffect(() => {
        videoRef.current.playbackRate = playbackRate;
    }, []);

    return (
        <video
            loop
            autoPlay
            muted
            className={cn(styles.video, classes)}
            ref={videoRef}
        >
            <source src={src} />
        </video>
    );
}

export default UiVideo;
