import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Loader } from "../components/Loader";
import { Island } from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";


export const Home: React.FC = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState<number | null>(null);

    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];
        let rotation = [0.1, 4.7, 0];

        if(window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
        } else {
            screenScale = [1, 1, 1];
        }

        return { screenScale, screenPosition, rotation };
    }

    const adjustPlaneForScreenSize = () => {
        let screenScale: [number, number, number], screenPosition: [number, number, number];

        if(window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, -1.5, 0];
        } else {
            screenScale = [3, 3, 3];
            screenPosition = [0, -4, -4];
        }

        return { screenScale, screenPosition };
    }

    const { screenScale: islandScale, screenPosition: islandPosition, rotation: islandRotation } = adjustIslandForScreenSize();
    const { screenScale: planeScale, screenPosition: planePosition } = adjustPlaneForScreenSize();

    return (
      <section className="w-full h-screen relative">
            {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
                Popup
            </div> */}
            <Canvas 
                className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight intensity={2} position={[1, 1, 1]} />
                    <ambientLight intensity={0.5} />
                    <hemisphereLight color="#b1e1ff" groundColor="#000000" intensity={1} />
                    
                    <Bird />
                    <Sky />
                    <Island 
                        position={islandPosition}
                        scale={islandScale}
                        rotation={islandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />
                    <Plane
                        isRotating={isRotating}
                        position={planePosition}
                        scale={planeScale}
                        rotation={[0, 20, 0]}    
                    />
                </Suspense>
            </Canvas>
            
      </section>
      );
  }