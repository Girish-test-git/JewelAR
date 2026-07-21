import { FaceLandmarkIndices } from "../constants/FaceLandmarkIndices";

export interface AnchorPoints {

    nose: any;

    chin: any;

    leftEar: any;

    rightEar: any;

    leftEye: any;

    rightEye: any;

}

export default class LandmarkMapper {

    static map(landmarks: any[]): AnchorPoints {

        return {

            nose: landmarks[FaceLandmarkIndices.NOSE_TIP],

            chin: landmarks[FaceLandmarkIndices.CHIN],

            leftEar: landmarks[FaceLandmarkIndices.LEFT_EAR],

            rightEar: landmarks[FaceLandmarkIndices.RIGHT_EAR],

            leftEye: landmarks[FaceLandmarkIndices.LEFT_EYE],

            rightEye: landmarks[FaceLandmarkIndices.RIGHT_EYE]

        };

    }

}