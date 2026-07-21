import { useGLTF } from "@react-three/drei";

export default function Necklace() {

    const { scene } = useGLTF(
        "/models/necklace/necklace.glb"
    );

    return (

        <primitive
            object={scene}
            position={[0, -1, 0]}
            scale={0.8}
        />

    );

}

useGLTF.preload("/models/necklace/necklace.glb");