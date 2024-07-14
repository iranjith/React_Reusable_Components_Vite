import type { Meta, StoryObj } from "@storybook/react";
import Label from "../components/Label/Label";

const meta = {
  title: "Atoms/Label",
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
