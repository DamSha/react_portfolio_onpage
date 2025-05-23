// components/Alerts.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Alert from '../components/Alerts';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    color: { control: 'text' },
    message: { control: 'text' },
    icon: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    color: 'info',
    message: 'Ceci est une alerte dynamique !',
    icon: 'fa fa-info-circle',
  },
};