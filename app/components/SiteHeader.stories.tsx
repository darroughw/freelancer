import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import SiteHeader from "./SiteHeader";

const meta: Meta<typeof SiteHeader> = {
  title: "Components/SiteHeader",
  component: SiteHeader,
};

export default meta;
type Story = StoryObj<typeof SiteHeader>;

export const Default: Story = {};
