import * as THREE from "three";
import { Size } from "@react-three/fiber";
import { HooksReturn } from "../types";
export type BlendingParams = {
    /** Make this texture Blending , default:THREE.Texture */
    texture?: THREE.Texture;
    /** map texture, default:THREE.Texture */
    map?: THREE.Texture;
    /** map strength , r,g value are affecting , default:0.3 */
    mapIntensity?: number;
    /** Alpha blending is performed using the alpha of the set texture. , default:false */
    alphaMap?: THREE.Texture | false;
    /** default:(0.5,0.5,0.5) */
    brightness?: THREE.Vector3;
    /** default:0.0 */
    min?: number;
    /** default:1.0 */
    max?: number;
    /** If set, this value will apply color dodge , default: false */
    dodgeColor?: THREE.Color | false;
};
export type BlendingObject = {
    scene: THREE.Scene;
    material: THREE.Material;
    camera: THREE.Camera;
    renderTarget: THREE.WebGLRenderTarget;
};
export declare const BLENDING_PARAMS: BlendingParams;
/**
 * Blend map to texture. You can set the threshold for blending with brightness. You can set the dodge color by setting color.
If you don't want to reflect the map's color, you can use useFxBlending instead.
 * @link https://github.com/takuma-hmng8/use-shader-fx#usage
 */
export declare const useBlending: ({ size, dpr, }: {
    size: Size;
    dpr: number;
}) => HooksReturn<BlendingParams, BlendingObject>;
