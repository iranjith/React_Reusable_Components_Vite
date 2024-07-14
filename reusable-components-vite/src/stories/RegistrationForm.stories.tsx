import type { Meta, StoryObj } from "@storybook/react";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/RegistrationForm",
  component: RegistrationForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof RegistrationForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    confirmationMessage: "Thanks for registering",
    minPasswordLength: 8,
    onSubmit(user) {
      console.log(user);
    },
  },
};
