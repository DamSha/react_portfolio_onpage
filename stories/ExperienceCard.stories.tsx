// components/ExperienceCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import ExperienceCard from '../components/ExperienceCard';

const meta: Meta<typeof ExperienceCard> = {
  title: 'Components/ExperienceCard',
  component: ExperienceCard,
  argTypes: {
    companyLogo: { control: 'text' },
    company: { control: 'text' },
    role: { control: 'text' },
    date: { control: 'text' },
    desc: { control: 'text' },
    descBullets: { control: 'object' },
  },
};
export default meta;

type Story = StoryObj<typeof ExperienceCard>;

export const Default: Story = {
  args: {
    companyLogo: 'https://placehold.co/100x100',
    company: 'Tech Corp',
    role: 'Développeur',
    date: '2022',
    desc: 'Expérience dynamique.',
    descBullets: ['Tâche 1', 'Tâche 2'],
  },
};