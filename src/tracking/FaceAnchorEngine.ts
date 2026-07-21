import TrackingStore from "../store/TrackingStore";
import { Vector3 } from "../math/Vector";

export default class FaceAnchorEngine {

    update(landmarks: Vector3[]): void {

        if (!landmarks || landmarks.length < 478) {

            TrackingStore.setFaceDetected(false);
            return;

        }

        TrackingStore.setFaceDetected(true);

        // MediaPipe landmark indices
        const FOREHEAD = 10;
        const NOSE = 1;
        const CHIN = 152;
        const LEFT_EAR = 234;
        const RIGHT_EAR = 454;

        const forehead = landmarks[FOREHEAD];
        const nose = landmarks[NOSE];
        const chin = landmarks[CHIN];
        const leftEar = landmarks[LEFT_EAR];
        const rightEar = landmarks[RIGHT_EAR];

        // Temporary neck approximation
        const neck: Vector3 = {

            x: chin.x,
            y: chin.y + 0.12,
            z: chin.z

        };

        TrackingStore.setAnchor("forehead", forehead);
        TrackingStore.setAnchor("nose", nose);
        TrackingStore.setAnchor("chin", chin);
        TrackingStore.setAnchor("leftEar", leftEar);
        TrackingStore.setAnchor("rightEar", rightEar);
        TrackingStore.setAnchor("neck", neck);

    }

}