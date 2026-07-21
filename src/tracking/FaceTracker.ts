export interface FaceTrackingResult {
  landmarks: number[][];
  timestamp: number;
}

export class FaceTracker {
  private isInitialized = false;

  async initialize(): Promise<void> {
    console.log("Initializing FaceTracker...");

    // MediaPipe model will be loaded here in the next step

    this.isInitialized = true;

    console.log("FaceTracker initialized successfully.");
  }

  async detect(video: HTMLVideoElement): Promise<FaceTrackingResult | null> {
    if (!this.isInitialized) {
      return null;
    }

    return {
      landmarks: [],
      timestamp: performance.now(),
    };
  }

  dispose(): void {
    console.log("FaceTracker disposed.");
    this.isInitialized = false;
  }
}