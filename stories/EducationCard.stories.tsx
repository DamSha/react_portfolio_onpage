// components/EducationCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import EducationCard from '../components/EducationCard';

const meta: Meta<typeof EducationCard> = {
  title: 'Components/EducationCard',
  component: EducationCard,
  argTypes: {
    schoolName: { control: 'text' },
    subHeader: { control: 'text' },
    duration: { control: 'text' },
    desc: { control: 'text' },
    grade: { control: 'text' },
    descBullets: { control: 'object' },
  },
};
export default meta;

type Story = StoryObj<typeof EducationCard>;

export const Default: Story = {
  args: {
    schoolName: 'Université de Paris',
    subHeader: 'Licence Informatique',
    duration: '2018 - 2021',
    desc: 'Une description dynamique.',
    grade: 'Mention Bien',
    descBullets: ['Projet 1', 'Projet 2'],
  },
};