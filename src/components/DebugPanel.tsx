interface DebugPanelProps {

    faceState: string;

    landmarks: number;

    fps: number;

    nose?: any;

    leftEar?: any;

    rightEar?: any;

}

export default function DebugPanel({

    faceState,

    landmarks,

    fps,

    nose,

    leftEar,

    rightEar

}: DebugPanelProps) {

    return (

        <div
            style={{
                position: "absolute",
                top: 10,
                left: 10,
                width: 260,
                background: "rgba(0,0,0,0.75)",
                color: "#00ff66",
                padding: 12,
                borderRadius: 8,
                fontFamily: "Consolas",
                fontSize: 13,
                zIndex: 1000
            }}
        >

            <h3 style={{ marginTop: 0 }}>
                JewelAR Debug
            </h3>

            <div>Face State : {faceState}</div>

            <div>Landmarks : {landmarks}</div>

            <div>FPS : {fps}</div>

            <hr />

            <div>

                Nose :

                {nose ?

                    ` ${nose.x.toFixed(3)}, ${nose.y.toFixed(3)}`

                    :

                    " -"

                }

            </div>

            <div>

                Left Ear :

                {leftEar ?

                    ` ${leftEar.x.toFixed(3)}, ${leftEar.y.toFixed(3)}`

                    :

                    " -"

                }

            </div>

            <div>

                Right Ear :

                {rightEar ?

                    ` ${rightEar.x.toFixed(3)}, ${rightEar.y.toFixed(3)}`

                    :

                    " -"

                }

            </div>

        </div>

    );

}