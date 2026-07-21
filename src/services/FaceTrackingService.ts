import {
    FaceLandmarker,
    FilesetResolver
} from "@mediapipe/tasks-vision";

class FaceTrackingService {

    private faceLandmarker: FaceLandmarker | null = null;

    async initialize() {

        if (this.faceLandmarker) return;

        const vision = await FilesetResolver.forVisionTasks(
            "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
        );

        this.faceLandmarker = await FaceLandmarker.createFromOptions(
            vision,
            {
                baseOptions: {
                    modelAssetPath: "/models/face_landmarker.task"
                },
                runningMode: "VIDEO",
                numFaces: 1
            }
        );

        console.log("✅ Face Landmarker Ready");
    }

    detect(video: HTMLVideoElement) {

        if (!this.faceLandmarker) {
            return null;
        }

        return this.faceLandmarker.detectForVideo(
            video,
            performance.now()
        );
    }
}

export default new FaceTrackingService();