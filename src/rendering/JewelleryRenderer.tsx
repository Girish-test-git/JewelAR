import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function JewelleryRenderer() {

    const { scene } = useGLTF("/models/necklace/necklace.glb");

    useEffect(() => {

        const box = new THREE.Box3().setFromObject(scene);

        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        console.log("Bounding Box:", box);
        console.log("Size:", size);
        console.log("Center:", center);

        // Center the model around its own origin
        scene.position.sub(center);

    }, [scene]);

    return (

        <primitive
            object={scene}
            position={[0, -0.2, -1.5]}
            rotation={[0, Math.PI, 0]}
            scale={8}
        />

    );

}

useGLTF.preload("/models/necklace/necklace.glb");