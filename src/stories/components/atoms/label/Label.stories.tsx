import { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

const meta = {
  title: 'Design System/Atons/Label',
  argTypes: {
   // color: { control: 'inline-radio'  }
  },
  parameters: {
    // backgrounds: {
    //   default: 'dark'
    // },
    layout: 'centered',
  },
  tags: ['autodocs'],
  // decorators: [
  //   (Story) => (
  //     <div style={{ width: '50px' }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
  component: Label,
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'primary',
    text: 'label'
  },
  // render: (args) => (
  //   <>
  //     <Label {...args }></Label>
  //     <Label {...args } color="secondary"></Label>
  //     <Label {...args } color="tertiary"></Label>
  //   </>
  // )
}
