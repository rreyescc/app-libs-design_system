import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: 'Design System/Atoms/Button',
  component: Button
} satisfies Meta<typeof Button>;

export default meta;

type Story =StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'default'
  }
}