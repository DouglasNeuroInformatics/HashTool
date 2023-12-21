import type { Meta, StoryObj } from '@storybook/react';

import { InfoForm } from './InfoForm';

type Story = StoryObj<typeof InfoForm>;

export default { component: InfoForm } as Meta<typeof InfoForm>;

export const Default: Story = {};
