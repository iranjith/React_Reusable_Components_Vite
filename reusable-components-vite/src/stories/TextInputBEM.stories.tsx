import type { Meta, StoryObj } from "@storybook/react";
import TextInputBEM, {
  Props as TextInputBEMProps,
} from "../components/TextInputBEM/TextInputBEM";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<TextInputBEMProps> = {
  title: "Atoms/TextInputBEM",
  component: TextInputBEM,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TextInputBEM>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TextInputBEMOptional: Story = {
  args: {
    htmlId: "example-optional",
    label: "First Name",
    name: "firstname",
    onChange() {},
  },
};

export const TextInputBEMError: Story = {
  args: {
    htmlId: "example-optional",
    label: "First Name",
    name: "firstname",
    onChange() {},
    required: true,
    error: "First name is required",
  },
};

export const TextInputBEMWithPlaceholder: Story = {
  args: {
    htmlId: "example-optional",
    label: "First Name",
    name: "firstname",
    onChange() {},
    placeholder: "Type here",
  },
};
