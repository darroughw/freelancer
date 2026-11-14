import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import KingfisherMark from "./KingfisherMark";

const meta: Meta<typeof KingfisherMark> = {
  title: "Components/KingfisherMark",
  component: KingfisherMark,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The kingfisher logo mark. `square` is the solid tile in the site header (ink background, cream bird); `circle` is the ringed badge mark. Decorative (`aria-hidden`); wrap it in a labelled link when it's interactive, as `SiteHeader` does.",
      },
    },
  },
  argTypes: {
    shape: { control: "inline-radio", options: ["square", "circle"] },
    size: { control: { type: "range", min: 24, max: 160, step: 4 } },
    background: { control: "text", description: "Any CSS color; use the palette's `var(--color-*)` properties." },
    foreground: { control: "text", description: "Bird color." },
  },
};

export default meta;
type Story = StoryObj<typeof KingfisherMark>;

export const Square: Story = {
  args: { shape: "square", size: 84, background: "var(--color-ink)", foreground: "var(--color-cream)" },
};

export const Circle: Story = {
  args: { shape: "circle", size: 84 },
};
