import { FaceState } from "../../types/FaceState";

export default class FaceTracker {

    private state: FaceState = FaceState.SEARCHING;

    private lostFrames = 0;

    private readonly maxLostFrames = 8;

    update(faceDetected: boolean): FaceState {

        if (faceDetected) {

            this.lostFrames = 0;
            this.state = FaceState.TRACKING;

        } else {

            this.lostFrames++;

            if (this.lostFrames > this.maxLostFrames) {

                this.state = FaceState.LOST;

            }

        }

        return this.state;

    }

    getState(): FaceState {

        return this.state;

    }

}