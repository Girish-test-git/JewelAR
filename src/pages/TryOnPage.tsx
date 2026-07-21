import { useCallback, useRef } from "react";

import Camera from "../components/Camera";
import Scene from "../rendering/Scene";

import FaceTrackingService from "../services/FaceTrackingService";

import FaceTracker from "../tracking/trackers/FaceTracker";
import LandmarkMapper from "../tracking/LandmarkMapper";
import HeadPoseCalculator from "../tracking/HeadPoseCalculator";

import { useTrackingStore } from "../store/useTrackingStore";

import { FaceState } from "../types/FaceState";

export default function TryOnPage() {

    const tracker = useRef(new FaceTracker());

    const landmarkMapper = useRef(new LandmarkMapper());

    const lastState = useRef(FaceState.SEARCHING);

    const animationId = useRef<number>();

    const processVideo = useCallback(async (video: HTMLVideoElement) => {

        await FaceTrackingService.initialize();

        const detect = () => {

            const result = FaceTrackingService.detect(video);

            const hasFace =
                result !== null &&
                result.faceLandmarks.length > 0;

            const state = tracker.current.update(hasFace);

            if (state !== lastState.current) {

                lastState.current = state;

                console.log("Tracking:", state);

            }

            if (hasFace) {

                const landmarks = result!.faceLandmarks[0];

                landmarkMapper.current.map(landmarks);

                const pose = HeadPoseCalculator.calculate(landmarks);

                useTrackingStore.getState().setHeadPose(pose);

            }

            animationId.current = requestAnimationFrame(detect);

        };

        detect();

    }, []);

    return (

        <div
            style={{
                width: 700,
                margin: "0 auto",
                position: "relative"
            }}
        >

            <h1>JewelAR</h1>

            <Camera onVideoReady={processVideo} />

            <Scene />

        </div>

    );

}