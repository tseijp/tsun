import {MutableRefObject, useEffect, useRef} from 'react'
import {useThree, useFrame} from 'react-three-fiber'
import {Camera} from 'three'

type CameraProps = {
}

export function useCamera (
    props?: Partial<CameraProps>,
): MutableRefObject<Camera | undefined>

export function useCamera (){
    // for camera
    const {setDefaultCamera} = useThree()
    const camera = useRef<THREE.Camera>()
    useFrame(() => camera.current?.updateMatrixWorld())
    useEffect(() => void setDefaultCamera(camera.current as any), [setDefaultCamera])
    return camera
}
