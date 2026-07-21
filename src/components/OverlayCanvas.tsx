import { useEffect, useRef } from "react";

type OverlayCanvasProps = {
    width: number;
    height: number;
};

function OverlayCanvas({ width, height }: OverlayCanvasProps) {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {

        const canvas = canvasRef.current;

        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        ctx.clearRect(0, 0, width, height);

    }, [width, height]);

    return (
        <canvas
            ref={canvasRef}
            width={width}
            height={height}
            style={{
                position: "absolute",
                left: 0,
                top: 0,
                pointerEvents: "none"
            }}
        />
    );
}

export default OverlayCanvas;