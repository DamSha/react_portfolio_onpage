// components/ProjectsCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import ProjectsCard from '../components/ProjectsCard';

const meta: Meta<typeof ProjectsCard> = {
  title: 'Components/ProjectsCard',
  component: ProjectsCard,
  argTypes: {
    name: { control: 'text' },
    desc: { control: 'text' },
    github: { control: 'text' },
    link: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof ProjectsCard>;

export const Default: Story = {
  args: {
    name: 'Projet Storybook',
    desc: 'Un projet dynamique pour Storybook.',
    github: 'https://github.com/',
    link: 'https://demo.com/',
  },
};