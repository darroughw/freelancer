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
      html: `Used behavioral analytics to identify critical UX failures on a high-traffic product site, then redesigned the core product finder to eliminate friction. Read more on <a href="#">the methodology</a>.`,
    },
  },
};

export const Subheading: Story = {
  args: {
    block: { type: "subheading", text: "Finder Tool Redesign: Progressive Disclosure" },
  },
};

export const Bullets: Story = {
  args: {
    block: {
      type: "bullets",
      items: [
        "One question at a time, so users can't attempt step two before finishing step one.",
        `Explicit, labeled Select buttons in place of image-only click targets.`,
        "A progress bar to orient users and reduce cognitive load.",
      ],
    },
  },
};

export const Table: Story = {
  args: {
    block: {
      type: "table",
      headers: ["Date", "Installation-Related Searches", "Site Traffic"],
      rows: [
        ["April 2024", "83", "3,238"],
        ["May 2024", "99", "4,427"],
        ["April 2025", "7", "21,072"],
      ],
    },
  },
};

export const Stat: Story = {
  args: {
    block: {
      type: "stat",
      items: [
        { value: "92%", label: "Drop in installation searches" },
        { value: "6×", label: "Traffic growth over period" },
      ],
    },
  },
};

export const Images: Story = {
  args: {
    block: {
      type: "images",
      items: [
        { src: "/images/delta.jpg", alt: "Delta shower door product finder", width: 1200, height: 1200 },
        { src: "/images/liberty.jpg", alt: "Liberty Hardware cabinet pull detail", width: 1200, height: 800 },
      ],
      caption: "Two images laid out side by side, each sized from its own aspect ratio.",
    },
  },
};
