import type { Vector3 } from "../math/Vector";
import { useTrackingStore } from "../store/useTrackingStore";

export default class LandmarkMapper {

    map(landmarks: Vector3[]): void {

        const store = useTrackingStore.getState();

        if (!landmarks || landmarks.length < 478) {

            store.setFaceDetected(false);
            return;

        }

        store.setFaceDetected(true);

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

        const neck = {

            x: chin.x,
            y: chin.y + 0.12,
            z: chin.z

        };

        store.setAnchor("forehead", forehead);
        store.setAnchor("nose", nose);
        store.setAnchor("chin", chin);
        store.setAnchor("leftEar", leftEar);
        store.setAnchor("rightEar", rightEar);
        store.setAnchor("neck", neck);

    }

}