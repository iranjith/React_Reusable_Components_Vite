import type { Meta, StoryObj } from "@storybook/react";

import JsonSchemaPlayground from "../components/JSONSchemaPlayground/JSONSchemaPlayground";

const meta = {
  title: "Components/JSONSchemaPlayground",
  component: JsonSchemaPlayground,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // argTypes: {},
} satisfies Meta<typeof JsonSchemaPlayground>;

export default meta;

type Story = StoryObj<typeof meta>;

// Template for rendering the component
const Template = (args) => <JsonSchemaPlayground {...args} />;

export const Default: Story = Template.bind({});
Default.args = {};
