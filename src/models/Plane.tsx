import { useGLTF } from "@react-three/drei"
import planeScene from "../assets/3d/plane.glb"

interface PlaneProps {
    isRotating: boolean;
    [key: string]: any;
}

export default function Plane({ isRotating, ...props}: PlaneProps) {
    const { scene, animations } = useGLTF(planeScene)
    return (
        <mesh {...props}>
            <primitive object={scene} />
        </mesh>
    )
}