import type { Meta, StoryObj } from "@storybook/react";
import EyeIcon from "../components/EyeIcon/EyeIcon";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/EyeIcon",
  component: EyeIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof EyeIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const EyeIconExample: Story = {
  args: {},
};
