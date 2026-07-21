import TrackingStore, { Vector3 } from "../store/TrackingStore";

export default class FaceAnchorEngine {

    update(landmarks: Vector3[]) {

        if (!landmarks || landmarks.length < 478) {

            TrackingStore.setFaceDetected(false);

            return;

        }

        TrackingStore.setFaceDetected(true);

        // MediaPipe landmark indices
        const NOSE = 1;
        const FOREHEAD = 10;
        const CHIN = 152;
        const LEFT_EAR = 234;
        const RIGHT_EAR = 454;

        const chin = landmarks[CHIN];
        const forehead = landmarks[FOREHEAD];
        const nose = landmarks[NOSE];
        const leftEar = landmarks[LEFT_EAR];
        const rightEar = landmarks[RIGHT_EAR];

        // Approximate neck anchor below the chin
        const neck: Vector3 = {
            x: chin.x,
            y: chin.y + 0.12,
            z: chin.z
        };

        TrackingStore.setAnchor("nose", nose);
        TrackingStore.setAnchor("forehead", forehead);
        TrackingStore.setAnchor("chin", chin);
        TrackingStore.setAnchor("leftEar", leftEar);
        TrackingStore.setAnchor("rightEar", rightEar);
        TrackingStore.setAnchor("neck", neck);
    }

}