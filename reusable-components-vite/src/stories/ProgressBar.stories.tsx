import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import ProgressBar from "../components/ProgressBar/ProgressBar";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ProgressFor20: Story = {
  args: {
    percent: 20,
    width: 150,
  },
};

export const ProgressFor70: Story = {
  args: {
    percent: 70,
    width: 150,
  },
};

export const ProgressFor100: Story = {
  args: {
    percent: 100,
    width: 150,
  },
};
