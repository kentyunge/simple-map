/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SomSimpleMap {
        "lat": any;
        "long": any;
        "zoom": number;
    }
}
declare global {
    interface HTMLSomSimpleMapElement extends Components.SomSimpleMap, HTMLStencilElement {
    }
    var HTMLSomSimpleMapElement: {
        prototype: HTMLSomSimpleMapElement;
        new (): HTMLSomSimpleMapElement;
    };
    interface HTMLElementTagNameMap {
        "som-simple-map": HTMLSomSimpleMapElement;
    }
}
declare namespace LocalJSX {
    interface SomSimpleMap {
        "lat"?: any;
        "long"?: any;
        "zoom"?: number;
    }
    interface IntrinsicElements {
        "som-simple-map": SomSimpleMap;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "som-simple-map": LocalJSX.SomSimpleMap & JSXBase.HTMLAttributes<HTMLSomSimpleMapElement>;
        }
    }
}