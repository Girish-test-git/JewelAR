import { useCallback, useRef } from "react";
import Camera from "../components/Camera";
import FaceTrackingService from "../services/FaceTrackingService";
import FaceTracker from "../tracking/trackers/FaceTracker";
import { FaceState } from "../types/FaceState";

export default function TryOnPage() {

    const animationFrameId = useRef<number | null>(null);

    const tracker = useRef(new FaceTracker());

    const lastState = useRef<FaceState>(FaceState.SEARCHING);

    const processVideo = useCallback(async (video: HTMLVideoElement) => {

        await FaceTrackingService.initialize();

        console.log("✅ AI Initialized");

        const detect = () => {

            const result = FaceTrackingService.detect(video);

            const hasFace =
                result !== null &&
                result.faceLandmarks.length > 0;

            const state = tracker.current.update(hasFace);

            if (state !== lastState.current) {

                lastState.current = state;

                console.log("Tracking State:", state);

                if (state === FaceState.TRACKING && result) {

                    console.log(
                        "Landmarks:",
                        result.faceLandmarks[0].length
                    );

                }

            }

            animationFrameId.current = requestAnimationFrame(detect);

        };

        detect();

    }, []);

    return (

        <div>

            <h1>JewelAR</h1>

            <Camera onVideoReady={processVideo} />

        </div>

    );

}