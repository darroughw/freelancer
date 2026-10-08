import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import SiteHeader from "./SiteHeader";

const meta: Meta<typeof SiteHeader> = {
  title: "Components/SiteHeader",
  component: SiteHeader,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Sticky page header: the wren logo mark linking home, and the site owner's name. Defaults to Darrough's real name in production — stories override it with a placeholder so this doc doesn't ship real contact info.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SiteHeader>;

export const Default: Story = {
  args: {
    name: "Jordan Doe",
  },
};

export const LongName: Story = {
  parameters: {
    docs: {
      description: {
        story: "A longer name, to check that the header holds its layout instead of overflowing or crowding the logo mark.",
      },
    },
  },
  args: {
    name: "Jordan Alexander Doe-Whitmore",
  },
};
