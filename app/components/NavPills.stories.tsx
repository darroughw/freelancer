import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import NavPills, { NAV_ITEMS } from "./NavPills";

const meta: Meta<typeof NavPills> = {
  title: "Components/NavPills",
  component: NavPills,
  argTypes: {
    activeSection: {
      control: "select",
      options: NAV_ITEMS.map((item) => item.id),
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavPills>;

export const WorkActive: Story = {
  args: { activeSection: "work" },
};

export const AboutActive: Story = {
  args: { activeSection: "about" },
};

export const ContactActive: Story = {
  args: { activeSection: "contact" },
};
