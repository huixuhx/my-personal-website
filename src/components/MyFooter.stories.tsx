import type { Meta, StoryObj } from "@storybook/react";
import MyFooter from "@/components/MyFooter"; // Ensure this path is correct!

const meta: Meta<typeof MyFooter> = {
  title: "Components/MyFooter",
  component: MyFooter,
  parameters: {
    layout: "fullscreen", // Ensures correct layout in Storybook
  },
};

export default meta; // ✅ This is the missing default export!

type Story = StoryObj<typeof MyFooter>;

export const Default: Story = {
  render: () => <MyFooter />, // ✅ Ensure correct function-based render
};