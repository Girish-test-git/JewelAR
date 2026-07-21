import { useEffect } from "react";

import Camera from "../components/Camera";
import FaceTrackingService from "../services/FaceTrackingService";

function TryOnPage() {

    useEffect(() => {

        async function initializeAI() {

            console.log("Loading MediaPipe...");

            await FaceTrackingService.initialize();

            console.log("MediaPipe Loaded Successfully");

        }

        initializeAI();

    }, []);

    return (
        <div className="content">

            <Camera />

        </div>
    );
}

export default TryOnPage;