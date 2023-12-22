import type { Meta, StoryObj } from '@storybook/react';

import { Nav } from './Nav';

type Story = StoryObj<typeof Nav>;

export default { component: Nav } as Meta<typeof Nav>;

export const Default: Story = {};
