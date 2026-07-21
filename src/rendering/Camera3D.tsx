import { PerspectiveCamera } from "@react-three/drei";

export default function Camera3D() {

    return (

        <PerspectiveCamera
            makeDefault
            position={[0, 0, 5]}
            fov={45}
        />

    );

}