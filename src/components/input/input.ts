import { html, LitElement } from "lit";
import { property, customElement } from "lit/decorators.js";

@customElement("my-input")
export class MyInput extends LitElement {
  @property()
  value: string = "Hello";

  render() {
    return html`<input value="${this.value}" />`;
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
