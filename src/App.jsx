// import { useEffect } from "react";

// function App() {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.type = "module";
//     script.src =
//       "https://unpkg.com/@google/model-viewer@latest/dist/model-viewer.min.js";
//     document.head.appendChild(script);
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <h1 className="text-xl font-bold mb-4">3D Model Viewer with AR</h1>
//       <model-viewer
//         src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"  
//         ios-src="https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
//         alt="3D Model"
//         auto-rotate
//         camera-controls
//         ar
//         ar-modes="webxr scene-viewer quick-look"
//         ar-scale="0.5"
//         className="w-full max-w-sm h-[400px]"
//       ></model-viewer>
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const [isARActive, setIsARActive] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@google/model-viewer@latest/dist/model-viewer.min.js";
    document.head.appendChild(script);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-xl font-bold mb-4">3D Model Viewer with AR</h1>
      <model-viewer
        src="/model.glb"
        ios-src="/model.usdz"
        alt="3D Model"
        auto-rotate
        camera-controls
        ar
        ar-modes="webxr scene-viewer quick-look"
        ar-scale="1"
        className="w-full max-w-sm h-[400px]"
        onARTracking={(event) => setIsARActive(event.detail.state === 'tracking')}
      ></model-viewer>
      {isARActive && (
        <button
          onClick={() => setShowCanvas(!showCanvas)}
          className="fixed bottom-4 left-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          {showCanvas ? "Hide Canvas View" : "Show Canvas View"}
        </button>
      )}
      {isARActive && showCanvas && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center">
          <model-viewer
            src="/model.glb"
            alt="3D Model"
            auto-rotate
            camera-controls
            className="w-full h-full"
          ></model-viewer>
          <button
            onClick={() => setShowCanvas(false)}
            className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
