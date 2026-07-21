import { useEffect, useRef } from "react";
import CameraService from "../services/CameraService";
import OverlayCanvas from "./OverlayCanvas";

interface CameraProps {
    onVideoReady?: (video: HTMLVideoElement) => void;
}

function Camera({ onVideoReady }: CameraProps) {

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {

        async function startCamera() {

            try {

                const stream = await CameraService.startCamera();

                if (videoRef.current) {

                    videoRef.current.srcObject = stream;

                    videoRef.current.onloadedmetadata = () => {

                        videoRef.current?.play();

                        if (videoRef.current && onVideoReady) {
                            onVideoReady(videoRef.current);
                        }

                    };

                }

            }
            catch (err) {

                console.error(err);

            }

        }

        startCamera();

    }, [onVideoReady]);

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