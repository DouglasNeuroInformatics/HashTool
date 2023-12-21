import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from './Loader';

type Story = StoryObj<typeof Loader>;

export default { component: Loader } as Meta<typeof Loader>;

export const Default: Story = {};
