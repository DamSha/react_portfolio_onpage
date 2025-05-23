// components/GithubProfileCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import GithubProfileCard from '../components/GithubProfileCard';

const meta: Meta<typeof GithubProfileCard> = {
  title: 'Components/GithubProfileCard',
  component: GithubProfileCard,
  argTypes: {
    avatar_url: { control: 'text' },
    bio: { control: 'text' },
    location: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof GithubProfileCard>;

export const Default: Story = {
  args: {
    avatar_url: 'https://placehold.co/200x200',
    bio: 'Développeur passionné par le web.',
    location: 'Paris, France',
  },
};