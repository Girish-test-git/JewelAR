import { useEffect, useRef } from "react";
import CameraService from "../services/CameraService";
import OverlayCanvas from "./OverlayCanvas";

function Camera() {

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {

        async function startCamera() {

            try {

                const stream = await CameraService.startCamera();

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }

            } catch (err) {

                console.error(err);

            }

        }

        startCamera();

    }, []);

    return (

        <div
            style={{
                position: "relative",
                width: 700,
                margin: "auto"
            }}
        >

            <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                width={700}
            />

            <OverlayCanvas
                width={700}
                height={525}
            />

        </div>

    );

}

export default Camera;