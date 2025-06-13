import "../input";
const meta = {
    component: "my-input",
};
const Template = ({ value }) => `<my-input value="${value}"></my-input>`;
export const Default = Template.bind({});
export const WithValue = {
    args: {
        version: "custom-value",
    },
};
export default meta;
