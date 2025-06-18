import { LitElement } from "lit";
declare const TwLitElement: typeof LitElement;
export declare class MyInput extends TwLitElement {
    accessor value: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "my-input": MyInput;
    }
}
declare module "react" {
    namespace JSX {
        interface IntrinsicElements {
            "my-input": PersonInfoProps;
        }
    }
}
interface PersonInfoProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    value: string;
}
export {};


declare module "react" {
    namespace JSX {
        interface IntrinsicElements {
            "my-input": PersonInfoProps;
        }
    }
}
