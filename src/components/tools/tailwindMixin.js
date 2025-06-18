import { adoptStyles, unsafeCSS } from "lit";
import style from "../../components/input/input.css?inline";
const stylesheet = unsafeCSS(style);
export const TW = (superClass) => class extends superClass {
    connectedCallback() {
        super.connectedCallback();
        if (this.shadowRoot)
            adoptStyles(this.shadowRoot, [stylesheet]);
    }
};
