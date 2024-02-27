import * as THREE from "three";
export declare class VorticityMaterial extends THREE.ShaderMaterial {
    uniforms: {
        uVelocity: {
            value: THREE.Texture;
        };
        uCurl: {
            value: THREE.Texture;
        };
        curl: {
            value: number;
        };
        dt: {
            value: number;
        };
        texelSize: {
            value: THREE.Vector2;
        };
    };
}
export declare const useVorticityMaterial: () => VorticityMaterial;
