import { useEffect } from "react";
import Camera from "../components/Camera";
import { FaceTracker } from "../tracking/FaceTracker";

export default function TryOnPage() {
  useEffect(() => {
    const tracker = new FaceTracker();

    tracker.initialize();

    return () => {
      tracker.dispose();
    };
  }, []);

  return (
    <div>
      <h1>JewelAR</h1>

      <Camera />
    </div>
  );
}