import { useAnimations, useGLTF } from "@react-three/drei"
import planeScene from "../assets/3d/plane.glb"
import { useEffect, useRef } from "react";

interface PlaneProps {
    isRotating: boolean;
    [key: string]: any;
}

export default function Plane({ isRotating, ...props}: PlaneProps) {
    const ref = useRef(null)
    const { scene, animations } = useGLTF(planeScene)
    const { actions } = useAnimations(animations, ref)
    
    useEffect(() => {
        if (isRotating) {
            actions['Take 001']?.play()
        } else {
            actions['Take 001']?.stop()
        }
    }, [isRotating, actions])
    
    return (
        <mesh {...props}>
            <primitive object={scene} />
        </mesh>
    )
}