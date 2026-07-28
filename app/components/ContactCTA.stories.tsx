import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ContactCTA from "./ContactCTA";

const meta: Meta<typeof ContactCTA> = {
  title: "Components/ContactCTA",
  component: ContactCTA,
};

export default meta;
type Story = StoryObj<typeof ContactCTA>;

export const Default: Story = {};
