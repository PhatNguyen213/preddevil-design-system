import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "../input";

type Story = StoryObj;

const meta: Meta = {
  component: "my-input",
};

const Template = ({ value }: { value: string }) =>
  `<my-input value="${value}"></my-input>`;

export const Default = Template.bind({});

export const WithValue: Story = {
  args: {
    version: "custom-value",
  },
};

export default meta;
