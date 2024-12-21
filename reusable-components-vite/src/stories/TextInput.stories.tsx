import type { Meta, StoryObj } from "@storybook/react";
import TextInput, {
  Props as TextInputProps,
} from "../components/TextInput/TextInput";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<TextInputProps> = {
  title: "Atoms/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TextInputOptional: Story = {
  args: {
    htmlId: "example-optional",
    label: "First Name",
    name: "firstname",
    onChange() {},
  },
};

export const TextInputError: Story = {
  args: {
    htmlId: "example-optional",
    label: "First Name",
    name: "firstname",
    onChange() {},
    required: true,
    error: "First name is required",
  },
};

export const TextInputWithPlaceholder: Story = {
  args: {
    htmlId: "example-optional",
    label: "First Name",
    name: "firstname",
    onChange() {},
    placeholder: "Type here",
  },
};
