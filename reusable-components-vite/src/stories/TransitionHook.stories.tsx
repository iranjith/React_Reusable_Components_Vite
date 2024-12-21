import type { Meta, StoryObj } from "@storybook/react";
import TransitionHook, {
  TransitionHookProps,
} from "../components/TransitionHook/TransitionHook";

const meta: Meta<TransitionHookProps> = {
  title: "EXAMPLES/TransitionHook",
  component: TransitionHook,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TransitionHook>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EnableTransition: Story = {
  args: {
    enableTransition: true,
  },
};
