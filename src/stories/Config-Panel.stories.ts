import type { Meta, StoryObj } from '@storybook/react';

import ConfigPanel from 'src/components/config-panel';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/ConfigPanel',
  component: ConfigPanel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof ConfigPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Set: Story = {
  args: {
    settingName: 'Setting',
    eligibleValues: [1,2,3,4,5],
    value: 5,
    setValue: (n) => {},
  },
};

export const Unset: Story = {
  args: {
    settingName: 'Setting',
    eligibleValues: [1,2,3,4,5],
    value: undefined,
    setValue: (n) => {},
  },
};