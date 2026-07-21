import {
    FaceLandmarker,
    FilesetResolver
} from "@mediapipe/tasks-vision";

class FaceTrackingService {

    private faceLandmarker: FaceLandmarker | null = null;

    async initialize() {

        const vision = await FilesetResolver.forVisionTasks(

            "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"

        );

        this.faceLandmarker = await FaceLandmarker.createFromOptions(

            vision,

            {
                baseOptions: {
                    modelAssetPath:
                        "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task"
                },

                runningMode: "VIDEO",

                numFaces: 1
            }

        );

    }

    getFaceLandmarker() {

        return this.faceLandmarker;

    }

}

export default new FaceTrackingService();