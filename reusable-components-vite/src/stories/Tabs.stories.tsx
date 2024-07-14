// src/components/DynamicTabs.stories.js

import type { Meta, StoryObj } from "@storybook/react";
import MuiTabs from "../components/Tabs/Tabs";

const meta = {
  title: "Components/MuiTabs",
  component: MuiTabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: {
        type: "select",
        options: ["vertical", "horizontal"],
      },
    },
  },
} satisfies Meta<typeof MuiTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orientation: "vertical",
  },
};
