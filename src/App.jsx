import { useEffect } from "react";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@google/model-viewer@latest/dist/model-viewer.min.js";
    document.head.appendChild(script);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-xl font-bold mb-4">3D Model Viewer with AR</h1>
      <model-viewer
        src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"  
        ios-src="https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
        alt="3D Model"
        auto-rotate
        camera-controls
        disable-tap
        ar
        ar-placement="floor"
        ar-modes="webxr scene-viewer quick-look"
        ar-scale="0.5"
        className="w-full max-w-sm h-[400px]"
      ></model-viewer>
    </div>
  );
}

export default App;
