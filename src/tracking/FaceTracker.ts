import {
  FaceLandmarker,
  FilesetResolver,
} from "@mediapipe/tasks-vision";

export class FaceTracker {
  private faceLandmarker: FaceLandmarker | null = null;

  async initialize() {
    console.log("Loading MediaPipe...");

    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
    );

    this.faceLandmarker = await FaceLandmarker.createFromOptions(
      vision,
      {
        baseOptions: {
          modelAssetPath: "/models/face_landmarker.task",
        },
        runningMode: "VIDEO",
        numFaces: 1,
      }
    );

    console.log("MediaPipe Loaded Successfully");
  }

  detect(video: HTMLVideoElement) {
    if (!this.faceLandmarker) return null;

    return this.faceLandmarker.detectForVideo(
      video,
      performance.now()
    );
  }

  dispose() {
    this.faceLandmarker?.close();
  }
}