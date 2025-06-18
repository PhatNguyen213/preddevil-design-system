import { html, LitElement } from "lit";
import { property, customElement } from "lit/decorators.js";
import { TW } from "../tools/tailwindMixin";

const TwLitElement = TW(LitElement);

@customElement("my-input")
export class MyInput extends TwLitElement {
  @property({ type: String, reflect: true })
  accessor value = "Hello";

  render() {
    return html`<input
      id="input"
      class="border border-b-amber-300 text-lg"
      value="${this.value}"
    />`;
  }
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

interface PersonInfoProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  value: string;
}
