export interface HeadPose {

    yaw: number;

    pitch: number;

    roll: number;

}

export default class HeadPoseCalculator {

    static calculate(landmarks: any[]): HeadPose {

        const leftEye = landmarks[33];

        const rightEye = landmarks[263];

        const nose = landmarks[1];

        const chin = landmarks[152];

        const dx = rightEye.x - leftEye.x;

        const dy = rightEye.y - leftEye.y;

        const roll = Math.atan2(dy, dx);

        const yaw = nose.x - 0.5;

        const pitch = chin.y - nose.y;

        return {

            yaw,

            pitch,

            roll

        };

    }

}