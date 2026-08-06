import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ContactCTA from "./ContactCTA";

const meta: Meta<typeof ContactCTA> = {
  title: "Components/ContactCTA",
  component: ContactCTA,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The contact section's title, supporting line, and mailto button. Rendered inside the CRT-styled contact panel in production (see the Contact section on the home page), not standalone as it is here.",
      },
    },
  },
  argTypes: {
    email: { description: "Used both as the visible button label and the mailto: target — no separate display-text prop." },
  },
};

export default meta;
type Story = StoryObj<typeof ContactCTA>;

export const Default: Story = {
  args: {
    title: "Let's talk.",
    sub: "Tell me about the project. I usually reply within a day.",
    email: "hello@example.com",
  },
};

export const LongCopy: Story = {
  parameters: {
    docs: {
      description: {
        story: "A longer title and sub line, to check wrapping — the sub is capped by `.contact-sub`'s 420px max-width in the real page, though this isolated story renders it unconstrained.",
      },
    },
  },
  args: {
    title: "Let's build something worth shipping together.",
    sub: "Tell me about the project, the timeline, and what success looks like. I usually reply within a day, often with a few clarifying questions before we get into scope.",
    email: "hello.this.is.a.longer.example.address@example.com",
  },
};
