export interface Landmark3D {
    x: number;
    y: number;
    z: number;
}

export interface FaceTrackingResult {
    detected: boolean;
    landmarks: Landmark3D[];
    yaw: number;
    pitch: number;
    roll: number;
}