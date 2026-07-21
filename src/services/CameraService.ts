class CameraService {

    async startCamera() {

        return await navigator.mediaDevices.getUserMedia({

            video: true

        });

    }

}

export default new CameraService();