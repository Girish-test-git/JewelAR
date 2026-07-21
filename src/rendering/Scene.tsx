import { Canvas } from "@react-three/fiber";
import Camera3D from "./Camera3D";
import Lighting from "./Lighting";
import JewelleryRenderer from "./JewelleryRenderer";

export default function Scene() {

    return (

        <Canvas
            style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none"
            }}

            gl={{
                alpha: true,
                antialias: true
            }}
        >

            <Camera3D />

            <Lighting />

            <JewelleryRenderer />

        </Canvas>

    );

}