import * as THREE from "three";
import { DuoToneMaterial } from "./useMesh";
import { HooksProps, HooksReturn } from "../../types";
export type DuoToneParams = {
    /** Make this texture duotone , Default:new THREE.Texture() */
    texture?: THREE.Texture;
    /** 1st color ,　Default:new THREE.Color(0xffffff) */
    color0?: THREE.Color;
    /** 2nd color , Default: new THREE.Color(0x000000) */
    color1?: THREE.Color;
};
export type DuoToneObject = {
    scene: THREE.Scene;
    material: DuoToneMaterial;
    camera: THREE.Camera;
    renderTarget: THREE.WebGLRenderTarget;
    output: THREE.Texture;
};
export declare const DUOTONE_PARAMS: DuoToneParams;
/**
 * @link https://github.com/FunTechInc/use-shader-fx?tab=readme-ov-file#usage
 */
export declare const useDuoTone: ({ size, dpr, samples, }: HooksProps) => HooksReturn<DuoToneParams, DuoToneObject>;
