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
          "Sticky page header: the wren logo mark linking home, the site owner's name, and a mailto CTA. All three props default to Darrough's real info in production — stories override them with placeholder values so this doc doesn't ship real contact info.",
      },
    },
  },
  argTypes: {
    ctaLabel: { description: 'Text on the mailto pill, before the trailing "↗". Wraps to a new line on narrow viewports rather than truncating.' },
  },
};

export default meta;
type Story = StoryObj<typeof SiteHeader>;

export const Default: Story = {
  args: {
    name: "Jordan Doe",
    email: "hello@example.com",
    ctaLabel: "Open to work",
  },
};

export const LongContent: Story = {
  parameters: {
    docs: {
      description: {
        story: "Longer name and CTA copy, to check that the header holds its layout instead of overflowing or crowding the logo mark and CTA together.",
      },
    },
  },
  args: {
    name: "Jordan Alexander Doe-Whitmore",
    email: "hello@example.com",
    ctaLabel: "Open to full-time & project work",
  },
};
