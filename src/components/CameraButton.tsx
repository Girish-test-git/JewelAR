type CameraButtonProps = {
    onClick: () => void;
};

function CameraButton({ onClick }: CameraButtonProps) {
    return (
        <button className="camera-button" onClick={onClick}>
            📷 Start Camera
        </button>
    );
}

export default CameraButton;