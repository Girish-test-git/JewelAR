import { useState } from "react";

import Header from "../components/Header";
import CameraButton from "../components/CameraButton";
import TryOnPage from "./TryOnPage";

function HomePage() {

    const [cameraStarted, setCameraStarted] = useState(false);

    return (
        <div className="app">

            <Header />

            {
                !cameraStarted
                    ? (
                        <main className="content">
                            <CameraButton
                                onClick={() => setCameraStarted(true)}
                            />
                        </main>
                    )
                    : (
                        <TryOnPage />
                    )
            }

        </div>
    );
}

export default HomePage;