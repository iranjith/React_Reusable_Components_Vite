import type { Meta, StoryObj } from "@storybook/react";
import PasswordInput from "../components/PasswordInput/PasswordInput";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/PasswordInput",
  component: PasswordInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    htmlId: "password-input",
    name: "password",
    placeholder: "Enter password",
    showVisibilityToggle: false,
    onChange() {},
  },
};
