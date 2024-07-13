import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Label from "../components/Label/Label";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LabelOptional: Story = {
  args: {
    htmlFor: "test",
    label: "test",
  },
};

export const LabelRequired: Story = {
  args: {
    htmlFor: "test",
    label: "test",
    required: true,
  },
};
