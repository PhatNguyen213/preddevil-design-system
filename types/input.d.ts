import { LitElement } from "lit";
export declare class MyInput extends LitElement {
    value: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
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
