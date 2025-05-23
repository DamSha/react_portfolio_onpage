// components/FeedbackCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import FeedbackCard from '../components/FeedbackCard';

const meta: Meta<typeof FeedbackCard> = {
  title: 'Components/FeedbackCard',
  component: FeedbackCard,
  argTypes: {
    name: { control: 'text' },
    role: { control: 'text' },
    feedback: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof FeedbackCard>;

export const Default: Story = {
  args: {
    name: 'Jean Dupont',
    role: 'Manager',
    feedback: 'Super travail !',
  },
};