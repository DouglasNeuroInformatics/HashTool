import type { Meta, StoryObj } from '@storybook/react';

import { Result } from './Result';

type Story = StoryObj<typeof Result>;

export default { component: Result } as Meta<typeof Result>;

export const Default: Story = {
  args: {
    hash: '12345'
  }
};
