import { create } from "zustand";
import type { Vector3 } from "../math/Vector";

export interface HeadPose {

    yaw: number;

    pitch: number;

    roll: number;

}

export interface FaceAnchors {

    forehead: Vector3;

    nose: Vector3;

    chin: Vector3;

    neck: Vector3;

    leftEar: Vector3;

    rightEar: Vector3;

}

interface TrackingState {

    faceDetected: boolean;

    anchors: FaceAnchors;

    headPose: HeadPose;

    setFaceDetected: (value: boolean) => void;

    setAnchor: (name: keyof FaceAnchors, value: Vector3) => void;

    setHeadPose: (pose: HeadPose) => void;

}

export const useTrackingStore = create<TrackingState>((set) => ({

    faceDetected: false,

    anchors: {

        forehead: { x: 0, y: 0, z: 0 },

        nose: { x: 0, y: 0, z: 0 },

        chin: { x: 0, y: 0, z: 0 },

        neck: { x: 0, y: 0, z: 0 },

        leftEar: { x: 0, y: 0, z: 0 },

        rightEar: { x: 0, y: 0, z: 0 }

    },

    headPose: {

        yaw: 0,

        pitch: 0,

        roll: 0

    },

    setFaceDetected: (value) =>

        set({

            faceDetected: value

        }),

    setAnchor: (name, value) =>

        set((state) => ({

            anchors: {

                ...state.anchors,

                [name]: value

            }

        })),

    setHeadPose: (pose) =>

        set({

            headPose: pose

        })

}));