import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CaseStudyBlock from "./CaseStudyBlock";

const meta: Meta<typeof CaseStudyBlock> = {
  title: "Components/CaseStudyBlock",
  component: CaseStudyBlock,
};

export default meta;
type Story = StoryObj<typeof CaseStudyBlock>;

export const Paragraph: Story = {
  args: {
    block: {
      type: "paragraph",
      html: `A paragraph block renders arbitrary HTML, including inline links like <a href="#">this one</a>, so case-study copy can reference external sources.`,
    },
  },
};

export const Subheading: Story = {
  args: {
    block: { type: "subheading", text: "A Subheading Within a Section" },
  },
};

export const Bullets: Story = {
  args: {
    block: {
      type: "bullets",
      items: [
        "A first supporting point, kept to a sentence or two.",
        "A second point, sometimes a bit longer to show how wrapping looks.",
        "A third and final point for good measure.",
      ],
    },
  },
};

export const Table: Story = {
  args: {
    block: {
      type: "table",
      headers: ["Milestone", "Metric A", "Metric B"],
      rows: [
        ["Month 1", "12", "1,200"],
        ["Month 2", "34", "3,400"],
        ["Month 3", "56", "5,600"],
      ],
    },
  },
};

export const Stat: Story = {
  args: {
    block: {
      type: "stat",
      items: [
        { value: "42%", label: "Sample improvement metric" },
        { value: "3×", label: "Sample growth metric" },
      ],
    },
  },
};

export const Images: Story = {
  args: {
    block: {
      type: "images",
      items: [
        { src: "/images/sample-placeholder.svg", alt: "First placeholder screenshot", width: 1200, height: 900 },
        { src: "/images/sample-placeholder.svg", alt: "Second placeholder screenshot", width: 1200, height: 900 },
      ],
      caption: "Two placeholder images laid out side by side, each sized from its own aspect ratio.",
    },
  },
};
