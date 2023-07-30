import type { Meta, StoryObj } from '@storybook/react';

import ButtonGrid from 'src/components/button-grid';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/ButtonGrid',
  component: ButtonGrid,
  parameters: {

  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof ButtonGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThreeGridDoubleButton: Story = {
  args: {
    columns: 3,
    rows: 4,
    links: [
      {label: '0'},
      {label: '1'},
      {label: '2'},
      {label: '3'},
      {label: '4'},
      {label: '5'},
      {label: '6'},
      {label: '7'},
      {label: '8'},
    ]
  }
};

export const ThreeGridTrebleButton: Story = {
  args: {
    columns: 3,
    rows: 3,
    links: [
      {label: '0'},
      {label: '1'},
      {label: '2'},
      {label: '3'},
      {label: '4'},
      {label: '5'},
      {label: '6', span: 2},
      {label: '7'},
    ]
  }
};


export const FourGridDoubleButton: Story = {
  args: {
    columns: 4,
    rows: 3,
    links: [
      {label: '0'},
      {label: '1'},
      {label: '2'},
      {label: '3'},
      {label: '4', span: 2},
      {label: '5', span: 2},
      {label: '6', span: 4},
    ]
  }
};