import type { Vector3 } from "../math/Vector";

export interface HeadRotation {

    yaw: number;
    pitch: number;
    roll: number;

}

export interface FaceAnchors {

    forehead: Vector3;

    chin: Vector3;

    nose: Vector3;

    neck: Vector3;

    leftEar: Vector3;

    rightEar: Vector3;

}

class TrackingStore {

    private faceDetected = false;

    private anchors: FaceAnchors = {

        forehead: { x: 0, y: 0, z: 0 },

        chin: { x: 0, y: 0, z: 0 },

        nose: { x: 0, y: 0, z: 0 },

        neck: { x: 0, y: 0, z: 0 },

        leftEar: { x: 0, y: 0, z: 0 },

        rightEar: { x: 0, y: 0, z: 0 }

    };

    private headRotation: HeadRotation = {

        yaw: 0,
        pitch: 0,
        roll: 0

    };

    setFaceDetected(value: boolean) {

        this.faceDetected = value;

    }

    isFaceDetected() {

        return this.faceDetected;

    }

    setAnchor(name: keyof FaceAnchors, value: Vector3) {

        this.anchors[name] = value;

    }

    getAnchor(name: keyof FaceAnchors): Vector3 {

        return this.anchors[name];

    }

    getAnchors(): FaceAnchors {

        return this.anchors;

    }

    setHeadRotation(rotation: HeadRotation) {

        this.headRotation = rotation;

    }

    getHeadRotation(): HeadRotation {

        return this.headRotation;

    }

}

export default new TrackingStore();