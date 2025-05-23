// components/DisplayLottie.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import GreetingLottie from '../components/DisplayLottie';

const meta: Meta<typeof GreetingLottie> = {
  title: 'Components/GreetingLottie',
  component: GreetingLottie,
  argTypes: {
    animationPath: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof GreetingLottie>;

export const Default: Story = {
  args: {
    animationPath: 'https://assets2.lottiefiles.com/packages/lf20_5ngs2ksb.json',
  },
};