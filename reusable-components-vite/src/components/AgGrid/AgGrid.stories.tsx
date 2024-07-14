import type { Meta, StoryObj } from '@storybook/react';

import AgGrid from './AgGrid';

const meta = {
  component: AgGrid,
} satisfies Meta<typeof AgGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};